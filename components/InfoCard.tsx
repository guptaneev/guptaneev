import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

interface InfoCardProps {
  title: string;
  description?: string;
  content: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  tags?: string[];
  githubLink?: string;
  externalLink?: string;
  externalLinkText?: string;
  className?: string;
  smallImage?: boolean;
  links?: { href: string; label: string; kind?: "github" | "external" }[];
}

export function InfoCard({
  title,
  description,
  content,
  imageSrc,
  imageAlt,
  tags,
  githubLink,
  externalLink,
  externalLinkText,
  className,
  smallImage = false,
  links,
}: InfoCardProps) {
  return (
    <Card
      className={`h-full flex flex-col bg-transparent border-0 shadow-none transition-all duration-300 ${
        className || ""
      }`}
    >
      <CardHeader className="pb-0 px-0">
        <CardTitle className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="label mb-2">
            {description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="flex-grow flex flex-col space-y-4 pt-4 px-0 pb-0">
        {imageSrc && (
          <div
            className={`relative w-full overflow-hidden rounded-xl group ${
              smallImage ? "aspect-[2/1]" : "aspect-[16/9]"
            }`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}
        <div className="text-base text-gray-300 leading-relaxed">
          {typeof content === "string"
            ? content.replace(/\bapi\b/gi, "API")
            : content}
        </div>

        {tags && tags.length > 0 && (
          <div className="pt-2">
            <p className="text-sm text-gray-400 leading-relaxed">
              {tags.map((tag, idx) => (
                <span key={tag}>
                  <span className="text-gray-300">{tag}</span>
                  {idx < tags.length - 1 && <span className="mx-2">·</span>}
                </span>
              ))}
            </p>
          </div>
        )}

        {links && links.length > 0 ? (
          <div className="flex flex-wrap gap-3 pt-3">
            {links.map((l) => (
              <Button
                key={l.href + l.label}
                variant="outline"
                size="sm"
                asChild
                className="text-sm bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 hover:border-blue-500/50 transition-all duration-200"
              >
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label text-blue-300 hover:text-blue-200 transition-colors flex items-center"
                >
                  {l.kind === "github" ? (
                    <Github className="w-4 h-4 mr-1.5" />
                  ) : (
                    <ExternalLink className="w-4 h-4 mr-1.5" />
                  )}
                  {l.label}
                </a>
              </Button>
            ))}
          </div>
        ) : (
          (githubLink || externalLink) && (
            <div className="flex space-x-3 pt-3">
              {githubLink && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="text-sm bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 hover:border-blue-500/50 transition-all duration-200"
                >
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label text-blue-300 hover:text-blue-200 transition-colors flex items-center"
                  >
                    <Github className="w-4 h-4 mr-1.5" />
                    GitHub
                  </a>
                </Button>
              )}
              {externalLink && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="text-sm bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 hover:border-blue-500/50 transition-all duration-200"
                >
                  <a
                    href={externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label text-blue-300 hover:text-blue-200 transition-colors flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-1.5" />
                    {externalLinkText || "View"}
                  </a>
                </Button>
              )}
            </div>
          )
        )}
      </CardContent>
    </Card>
  );
}
