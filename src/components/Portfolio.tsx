import EllipseIcon from "@/assets/icons/EllipseIcon";
import Decorator from "@/common/Decorator";
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
    <section className="flex items-center w-full flex-col gap-16" id="projects">
      <div className="flex items-center gap-16">
        <Decorator icon={<EllipseIcon />} />
        <h2 className="font-bold text-[64px] text-transparent bg-clip-text leading-[81.92px] bg-gradient-to-b from-[#138EFF] to-[#1DD7F0] pb-4 w-max">
          Proyectos
        </h2>
        <Decorator icon={<EllipseIcon />} />
      </div>

      <div className="grid lg:grid-cols-2 w-full gap-16">
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
            <p className="text-[#9A9A9A] mb-3">{repo.description}</p>
            </div>
            <img className="h-auto w-full group-hover:scale-[101.5%] transform duration-300 ease-in-out" src={repo.image} alt={`Description for ${repo.repo}`} />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
