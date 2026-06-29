import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/Section";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { getGuideBySlug, guides } from "@/data/guides";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `/guides/${slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `${siteConfig.domain}/guides/${slug}`,
      type: "article",
      publishedTime: guide.date,
      images: [
        {
          url: `${siteConfig.domain}/Installation d'un adoucisseur d'eau_hero.webp`,
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
    },
  };
}

function headingToId(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extractHeadings(content: string) {
  return content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.substring(3).trim();
      return { text, id: headingToId(text) };
    });
}

// Rend le formatage inline : liens markdown [texte](url) et gras **texte**
function renderInline(text: string): string {
  let html = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_m, label: string, url: string) => {
      const internal = url.startsWith("/") || url.startsWith("#");
      const rel = internal ? "" : ' target="_blank" rel="noopener noreferrer"';
      return `<a href="${url}" class="text-primary-600 font-medium underline hover:text-primary-700"${rel}>${label}</a>`;
    }
  );
  html = html.replace(
    /\*\*([^*]+)\*\*/g,
    '<strong class="font-semibold text-gray-900">$1</strong>'
  );
  return html;
}

function formatContent(content: string): string {
  const lines = content.split("\n");
  const out: string[] = [];
  let listType: "ul" | "ol" | null = null;
  let i = 0;

  const closeList = () => {
    if (listType) {
      out.push(listType === "ul" ? "</ul>" : "</ol>");
      listType = null;
    }
  };

  while (i < lines.length) {
    const line = lines[i];

    // Tableau markdown : ligne d'en-tête `| .. | .. |` suivie d'un séparateur `|---|`
    if (
      line.trim().startsWith("|") &&
      i + 1 < lines.length &&
      /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])
    ) {
      closeList();
      const cells = (row: string) =>
        row.split("|").slice(1, -1).map((c) => c.trim());
      const headers = cells(line);
      i += 2; // saute l'en-tête + le séparateur
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        rows.push(cells(lines[i]));
        i++;
      }
      const thead = `<thead><tr>${headers
        .map(
          (c) =>
            `<th class="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold text-gray-900">${renderInline(c)}</th>`
        )
        .join("")}</tr></thead>`;
      const tbody = `<tbody>${rows
        .map(
          (r) =>
            `<tr>${r
              .map(
                (c) =>
                  `<td class="border border-gray-300 px-4 py-2 text-gray-700">${renderInline(c)}</td>`
              )
              .join("")}</tr>`
        )
        .join("")}</tbody>`;
      out.push(
        `<div class="overflow-x-auto mb-6"><table class="w-full border-collapse text-sm">${thead}${tbody}</table></div>`
      );
      continue;
    }

    if (line.startsWith("# ")) {
      closeList();
      out.push(
        `<h1 class="text-3xl font-bold text-gray-900 mb-4">${renderInline(line.substring(2))}</h1>`
      );
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      closeList();
      const text = line.substring(3).trim();
      const id = headingToId(text);
      out.push(
        `<h2 id="${id}" class="text-2xl font-bold text-gray-900 mb-4 mt-8 scroll-mt-24">${renderInline(text)}</h2>`
      );
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      closeList();
      out.push(
        `<h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">${renderInline(line.substring(4))}</h3>`
      );
      i++;
      continue;
    }
    if (/^[-*]\s/.test(line)) {
      if (listType !== "ul") {
        closeList();
        out.push('<ul class="list-disc ml-6 mb-4 space-y-1">');
        listType = "ul";
      }
      out.push(
        `<li class="text-gray-700">${renderInline(line.replace(/^[-*]\s/, ""))}</li>`
      );
      i++;
      continue;
    }
    if (/^\d+\.\s/.test(line)) {
      if (listType !== "ol") {
        closeList();
        out.push('<ol class="list-decimal ml-6 mb-4 space-y-1">');
        listType = "ol";
      }
      out.push(
        `<li class="text-gray-700">${renderInline(line.replace(/^\d+\.\s/, ""))}</li>`
      );
      i++;
      continue;
    }

    closeList();

    if (line.trim() === "") {
      out.push("<br />");
      i++;
      continue;
    }
    if (line.startsWith("**") && line.endsWith("**")) {
      out.push(
        `<p class="font-semibold text-gray-900 mb-2">${renderInline(line.substring(2, line.length - 2))}</p>`
      );
      i++;
      continue;
    }
    out.push(`<p class="text-gray-700 mb-4">${renderInline(line)}</p>`);
    i++;
  }
  closeList();
  return out.join("\n");
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const headings = extractHeadings(guide.content);
  const relatedGuides = guides.filter((g) => g.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.date,
    inLanguage: "fr",
    url: `${siteConfig.domain}/guides/${slug}`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    wordCount: guide.content.split(/\s+/).length,
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      <Section className="py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Guides", href: "/guides" },
              { label: guide.title },
            ]}
          />

          <article>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {guide.title}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              {guide.description}
            </p>
            <div className="text-sm text-gray-500 mb-8">
              Publié le {new Date(guide.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>

            {/* Table des matières */}
            {headings.length > 2 && (
              <nav
                aria-label="Table des matières"
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10"
              >
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  Table des matières
                </p>
                <ol className="space-y-2">
                  {headings.map((h, i) => (
                    <li key={h.id} className="flex items-start gap-2 text-sm">
                      <span className="text-gray-400 font-mono shrink-0 mt-0.5">{i + 1}.</span>
                      <a
                        href={`#${h.id}`}
                        className="text-primary-600 hover:text-primary-700 hover:underline leading-snug"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: formatContent(guide.content) }}
            />
          </article>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/contact"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
            >
              Demander un devis gratuit
            </Link>
          </div>

          {/* Articles liés */}
          {relatedGuides.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Guides similaires</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedGuides.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/guides/${g.slug}`}
                    className="group block bg-white border border-gray-200 rounded-xl p-5 hover:border-primary-400 hover:shadow-md transition"
                  >
                    <p className="font-semibold text-gray-900 group-hover:text-primary-600 transition text-sm leading-snug mb-2">
                      {g.title}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-2">{g.description}</p>
                    <span className="mt-3 inline-block text-xs text-primary-600 font-medium">
                      Lire →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
