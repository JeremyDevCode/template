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
    <main className="flex items-center w-full flex-col gap-16" id="projects">
      <div className="flex items-center gap-16">
        <Decorator icon={<EllipseIcon />} />
        <h2 className="font-bold text-[64px] text-transparent bg-clip-text leading-[81.92px] bg-gradient-to-b from-[#138EFF] to-[#1DD7F0] pb-4 w-max">
          Proyectos
        </h2>
        <Decorator icon={<EllipseIcon />} />
      </div>

      <section className="grid grid-cols-3 w-full place-items-center gap-16">
        {repos.map((repo, index) => (
          <article
            key={index}
            className={`flex flex-col gap-8 bg-[#0F1115] border border-[#2E3440] w-full p-8 text-3xl max-h-[360px] overflow-hidden ${
              (index === 0 || index === 3 || index === 4) && "col-span-2"
            }`}
          >
            <a
              href={repo.link}
              target="_blank"
              rel="noreferrer"
              className="text-[#E3E6E8]"
            >
              <div className="flex items-center space-x-2">
                <span className="text-4xl font-bold capitalize">
                  {repo.repo}
                </span>
                <ExternalIcon width={18} className="mt-1 text-neutral-400" />
              </div>
            </a>
            <p className="text-[#9A9A9A] mb-3">{repo.description}</p>
            <img className="h-auto w-4/5" src={repo.image} />
          </article>
        ))}
      </section>
    </main>
  );
}

export default Portfolio;
