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

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <div className="bg-[#0F1115] border border-[#2E3440] w-[440px] text-white rounded-md p-5 space-y-2">
            <a
              href={repo.link}
              target="_blank"
              rel="noreferrer"
              className="mb-3 hover:underline text-neutral-200 hover:text-neutral-100"
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl">{repo.repo}</span>
                <ExternalIcon width={18} className="mt-1 text-neutral-400" />
              </div>
            </a>
            <p className="text-neutral-400 mb-3">{repo.description}</p>
          </div>
        ))}
      </section>

      <section className="flex gap-16">
        <div className="bg-[#0F1115] border border-[#2E3440] w-[692px] h-[360px]"></div>
        <div className="bg-[#0F1115] border border-[#2E3440] w-[440px] h-[360px]"></div>
      </section>

      <section className="flex gap-16">
        <div className="bg-[#0F1115] border border-[#2E3440] w-[440px] h-[360px]"></div>
        <div className="bg-[#0F1115] border border-[#2E3440] w-[692px] h-[360px]"></div>
      </section>
    </main>
  );
}

export default Portfolio;
