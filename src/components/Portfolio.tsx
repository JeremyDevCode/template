import EllipseIcon from "@/assets/icons/EllipseIcon";
import TitleSeparator from "./TitleSeparator";
import { useEffect, useState } from "react";

import { getRepositories } from "@/services/getRepositories";
import type { iRepository } from "@/services/getRepositories";
import ExternalIcon from "@/assets/icons/ExternalIcon";

function Portfolio() {
  const [repos, setRepos] = useState<iRepository[]>([]);

  const getRepos = async () => {
    const res = await getRepositories("juanpablo-is");
    setRepos(res);
    console.log(res);
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <section
      className="flex items-center w-full flex-col gap-16 mb-16"
      id="projects"
    >
      <TitleSeparator
        icon={<EllipseIcon className="w-6 h-6 md:w-8 md:h-8" />}
        className="from-[#138EFF] to-[#1DD7F0]"
      >
        Proyectos
      </TitleSeparator>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo, index) => (
          <article
            key={index}
            className="group rounded-lg [background-image:radial-gradient(50.78%_50.78%_at_15.62%_24.61%,_rgba(255,_255,_255,_0.1)_0%,_transparent_100%)] bg-[#0F111599] border border-[#2E3440] hover:border-[#434b5c] transition-colors duration-200 ease-out w-full text-3xl max-w-3xl overflow-hidden
          "
          >
            <div className="p-8 space-y-4">
              <a
                href={repo.link}
                target="_blank"
                rel="noreferrer noopener"
                className="text-[#E3E6E8]"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-4xl font-bold capitalize">
                    {repo.repo}
                  </span>
                  <ExternalIcon width={24} className="mt-1 text-neutral-400" />
                </div>
              </a>
              <p className="text-neutral-400 mb-3">{repo.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="flex gap-16">
        <article className="bg-[#0F1115] border border-[#2E3440] w-[692px] h-[360px]"></article>
        <article className="bg-[#0F1115] border border-[#2E3440] w-[440px] h-[360px]"></article>
      </div>

      <div className="flex gap-16">
        <article className="bg-[#0F1115] border border-[#2E3440] w-[440px] h-[360px]"></article>
        <article className="bg-[#0F1115] border border-[#2E3440] w-[692px] h-[360px]"></article>
      </div>
    </section>
  );
}

export default Portfolio;
