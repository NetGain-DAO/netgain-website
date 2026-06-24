"use client";

import { useState, type ReactNode } from "react";
import {
  FaBars,
  FaTimes,
  FaShieldAlt,
  FaCoins,
  FaGift,
  FaUniversity,
  FaChartLine,
  FaFileAlt,
  FaDiscord,
  FaTelegramPlane,
  FaRocket,
  FaCheck,
  FaExternalLinkAlt,
  FaLock,
  FaVoteYea,
  FaLayerGroup,
  FaWallet,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiBinance, SiBitcoin, SiSolana, SiTether } from "react-icons/si";

const LOGO = "/logo.png";

const LINKS = {
  app: "https://app.netgaindao.io",
  whitepaper: "https://docs.netgaindao.io",
  discord: "#",
  telegram: "https://t.me/netgaindao",
  x: "https://x.com/netgaindao",
  bscscan: "https://bscscan.com",
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const stats = [
    { title: "Total Supply", value: "100M", sub: "NG Tokens", icon: <FaCoins /> },
    { title: "Reward Pool", value: "50M", sub: "NG Allocated", icon: <FaGift /> },
    { title: "NG Vault", value: "40M", sub: "NG Allocated", icon: <FaWallet /> },
    { title: "Treasury Reserve", value: "10M", sub: "NG Allocated", icon: <FaShieldAlt /> },
  ];

  const tiers = [
    {
      name: "BRONZE",
      image: "/bronze.png",
      price: "100 USDT",
      multiplier: "×1",
      border: "border-orange-500/40",
      glow: "group-hover:shadow-[0_0_55px_rgba(249,115,22,0.25)]",
    },
    {
      name: "SILVER",
      image: "/silver.png",
      price: "500 USDT",
      multiplier: "×2",
      border: "border-zinc-300/40",
      glow: "group-hover:shadow-[0_0_55px_rgba(212,212,216,0.25)]",
    },
    {
      name: "GOLD",
      image: "/gold.png",
      price: "1500 USDT",
      multiplier: "×3",
      border: "border-yellow-400/50",
      glow: "group-hover:shadow-[0_0_65px_rgba(250,204,21,0.35)]",
    },
  ];

  const steps = [
    { title: "Membership", text: "Join NetGain DAO through a Membership NFT.", icon: <FaFileAlt /> },
    { title: "Stake NG", text: "Stake NG tokens and build effective participation power.", icon: <FaCoins /> },
    { title: "Treasury Growth", text: "Ecosystem activity supports treasury expansion.", icon: <FaUniversity /> },
    { title: "Governance", text: "Community members vote on treasury and ecosystem decisions.", icon: <FaVoteYea /> },
  ];

  const allocations = [
    { title: "Treasury", value: "70%", text: "Directed to long-term treasury growth.", icon: <FaShieldAlt /> },
    { title: "Marketing", value: "25%", text: "Used to grow the community and ecosystem.", icon: <FaChartLine /> },
    { title: "Operations", value: "5%", text: "Supports basic operational needs.", icon: <FaLayerGroup /> },
  ];

  const tokenomics = [
    { title: "Staking Reward Pool", value: "50M NG", text: "Main reward source for the community." },
    { title: "NG Vault", value: "40M NG", text: "Used for Buy & Stake and ecosystem mechanics." },
    { title: "Treasury Reserve", value: "10M NG", text: "Governance-controlled reserve." },
    { title: "Team Allocation", value: "0 NG", text: "No deployer or team token allocation." },
  ];

  const treasuryAssets = [
    { name: "Bitcoin", text: "High-quality digital asset exposure.", icon: <SiBitcoin />, color: "text-orange-400" },
    { name: "Solana", text: "Major digital asset opportunities.", icon: <SiSolana />, color: "text-purple-400" },
    { name: "Stablecoins", text: "Treasury liquidity and stability.", icon: <SiTether />, color: "text-green-400" },
    { name: "Future Assets", text: "Approved by community governance.", icon: <FaCoins />, color: "text-yellow-400" },
  ];

  const roadmap = [
    {
      phase: "PHASE 1",
      title: "Foundation & Launch",
      text: "Smart contracts, verified contracts, whitepaper, Membership NFTs, staking, governance and DApp launch.",
      status: "Completed / In Progress",
    },
    {
      phase: "PHASE 2",
      title: "Treasury Accumulation",
      text: "Grow treasury capital through membership activity, Buy & Stake participation and community expansion.",
      status: "Next",
    },
    {
      phase: "PHASE 3",
      title: "Digital Asset Expansion",
      text: "Governance may approve treasury allocations into Bitcoin, Solana, stablecoins and other approved assets.",
      status: "Governance Driven",
    },
    {
      phase: "PHASE 4",
      title: "Treasury Participation",
      text: "Approved treasury profits may be distributed through transparent Treasury Participation mechanisms.",
      status: "Future",
    },
    {
      phase: "PHASE 5",
      title: "Continuous Evolution",
      text: "Community-driven upgrades, new utilities, security reviews and long-term ecosystem improvements.",
      status: "Ongoing",
    },
  ];

  const transparency = [
    { title: "Verified Contracts", text: "Core contracts are deployed and verifiable on-chain.", icon: <FaFileAlt /> },
    { title: "Treasury Protection", text: "Treasury movement requires governance and execution.", icon: <FaUniversity /> },
    { title: "Security First", text: "Smart contracts can be reviewed and audited.", icon: <FaLock /> },
    { title: "Governance", text: "Community voting guides major ecosystem decisions.", icon: <FaVoteYea /> },
    { title: "BscScan", text: "Transactions and contracts are publicly visible.", icon: <FaExternalLinkAlt /> },
  ];

  const faq = [
    {
      q: "What is NetGain DAO?",
      a: "NetGain DAO is a community-owned multi-asset treasury ecosystem built around membership, staking, governance and transparent treasury growth.",
    },
    {
      q: "What is the role of the Membership NFT?",
      a: "Membership NFTs activate access to the ecosystem and define the staking multiplier: Bronze ×1, Silver ×2 and Gold ×3.",
    },
    {
      q: "Who controls the treasury?",
      a: "Treasury decisions are controlled through governance and executed through smart contract infrastructure.",
    },
    {
      q: "Does the team receive tokens?",
      a: "No. The initial NG allocation is distributed to the Reward Pool, NG Vault and Treasury Reserve with zero team allocation.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#010403] text-white">
      <style jsx global>{`
        @keyframes floaty {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }

        @keyframes softPulse {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .floaty { animation: floaty 5s ease-in-out infinite; }
        .soft-pulse { animation: softPulse 4s ease-in-out infinite; }
        .fade-up { animation: fadeUp 0.8s ease forwards; }
      `}</style>

      <Background />

      <nav className="sticky top-0 z-50 border-b border-yellow-500/20 bg-black/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8">
          <a href="#" className="flex items-center gap-3">
            <img src={LOGO} alt="NetGain DAO" className="h-10 w-10 md:h-12 md:w-12" />
            <div className="text-lg font-black tracking-widest md:text-2xl">
              <span className="text-yellow-400">NETGAIN</span>{" "}
              <span className="text-green-400">DAO</span>
            </div>
          </a>

          <div className="hidden items-center gap-6 text-xs font-black lg:flex">
            <a href="#how" className="hover:text-yellow-400">HOW IT WORKS</a>
            <a href="#treasury" className="hover:text-yellow-400">TREASURY</a>
            <a href="#membership" className="hover:text-yellow-400">MEMBERSHIP</a>
            <a href="#tokenomics" className="hover:text-yellow-400">TOKENOMICS</a>
            <a href="#roadmap" className="hover:text-yellow-400">ROADMAP</a>
            <a href="#governance" className="hover:text-yellow-400">GOVERNANCE</a>
            <a href={LINKS.whitepaper} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              WHITEPAPER
            </a>
            <NavIcon href={LINKS.discord} icon={<FaDiscord />} />
            <NavIcon href={LINKS.telegram} icon={<FaTelegramPlane />} />
            <NavIcon href={LINKS.x} icon={<FaXTwitter />} />
          </div>

          <div className="flex items-center gap-2">
            <a
              href={LINKS.app}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl border border-yellow-400/50 bg-yellow-400/10 px-4 py-2 text-xs font-black text-yellow-300 transition hover:bg-yellow-400 hover:text-black md:block"
            >
              LAUNCH APP
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-3 text-yellow-400 lg:hidden"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mx-4 mb-4 rounded-2xl border border-yellow-500/20 bg-black/95 p-4 lg:hidden">
            <div className="grid grid-cols-2 gap-3 text-xs font-black">
              <MobileLink href="#how" text="How It Works" />
              <MobileLink href="#treasury" text="Treasury" />
              <MobileLink href="#membership" text="Membership" />
              <MobileLink href="#tokenomics" text="Tokenomics" />
              <MobileLink href="#roadmap" text="Roadmap" />
              <MobileLink href="#governance" text="Governance" />
              <MobileLink href={LINKS.whitepaper} text="Whitepaper" />
              <MobileLink href={LINKS.app} text="Launch App" />
            </div>
          </div>
        )}
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-8 md:py-24">
        <div className="fade-up text-center md:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs font-black text-green-300">
            <SiBinance /> Built on BNB Smart Chain
          </div>

          <h1 className="bg-gradient-to-r from-yellow-300 via-white to-green-400 bg-clip-text text-5xl font-black leading-tight text-transparent md:text-7xl">
            NETGAIN DAO
          </h1>

          <h2 className="mt-5 text-2xl font-black leading-snug md:text-4xl">
            Community-Owned
            <br />
            Multi-Asset Treasury
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-300 md:mx-0 md:text-base">
            Building Wealth Together through a transparent, governance-driven ecosystem
            designed to build, protect and grow a community-owned treasury.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href={LINKS.whitepaper}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-gradient-to-r from-yellow-300 to-yellow-500 px-8 py-4 text-center text-sm font-black text-black shadow-[0_0_35px_rgba(234,179,8,.35)] transition hover:scale-105"
            >
              READ WHITEPAPER <FaFileAlt className="ml-2 inline" />
            </a>

            <a
              href={LINKS.app}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-yellow-500/40 bg-black/30 px-8 py-4 text-center text-sm font-black text-yellow-300 transition hover:bg-yellow-400 hover:text-black"
            >
              LAUNCH APP <FaRocket className="ml-2 inline" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="soft-pulse absolute top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-green-500/25 blur-3xl md:h-96 md:w-96" />
          <div className="floaty relative rounded-full border border-yellow-400/30 bg-black/50 p-8 shadow-[0_0_90px_rgba(34,197,94,.25)]">
            <img src={LOGO} alt="NetGain DAO" className="h-56 w-56 object-contain md:h-80 md:w-80" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-3 rounded-3xl border border-green-500/20 bg-[#06100c]/80 p-4 md:grid-cols-4 md:p-6">
          {stats.map((item) => (
            <div key={item.title} className="rounded-2xl p-3">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                {item.icon}
              </div>
              <p className="text-[10px] font-black uppercase text-zinc-400 md:text-xs">{item.title}</p>
              <p className="mt-2 break-words text-xl font-black md:text-3xl">{item.value}</p>
              <p className="text-xs text-zinc-400">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionTitle id="how" title="HOW NETGAIN WORKS" />

      <section className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-4 md:px-8">
        {steps.map((step, index) => (
          <InfoCard key={step.title} icon={step.icon} title={step.title} text={step.text} number={index + 1} />
        ))}
      </section>

      <SectionTitle id="treasury" title="TREASURY ALLOCATION" />

      <section className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-3 md:px-8">
        {allocations.map((item) => (
          <div key={item.title} className="rounded-3xl border border-yellow-500/20 bg-black/45 p-6 transition hover:-translate-y-1 hover:border-green-400/40">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 text-2xl text-yellow-400">
              {item.icon}
            </div>
            <p className="text-5xl font-black text-yellow-300">{item.value}</p>
            <h3 className="mt-3 text-xl font-black">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-6 max-w-7xl px-4 md:px-8">
        <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-6 text-center">
          <p className="text-sm leading-7 text-zinc-300">
            Membership activity supports treasury growth, ecosystem expansion and long-term community development.
          </p>
        </div>
      </section>

      <SectionTitle title="MULTI-ASSET TREASURY" />

      <section className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 md:grid-cols-4 md:px-8">
        {treasuryAssets.map((asset) => (
          <div key={asset.name} className="rounded-3xl border border-white/10 bg-black/45 p-5 transition hover:border-yellow-400/40">
            <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-4xl ${asset.color}`}>
              {asset.icon}
            </div>
            <h3 className="font-black">{asset.name}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{asset.text}</p>
          </div>
        ))}
      </section>

      <SectionTitle id="membership" title="MEMBERSHIP NFTs" />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 md:px-8">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`group rounded-3xl border ${tier.border} bg-black/55 p-5 transition duration-500 hover:-translate-y-2 ${tier.glow}`}
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/60">
              <img
                src={tier.image}
                alt={tier.name}
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-black text-yellow-300">{tier.name}</h3>
                <p className="text-sm text-zinc-400">{tier.price}</p>
              </div>

              <div className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 px-4 py-3 text-2xl font-black text-yellow-300">
                {tier.multiplier}
              </div>
            </div>

            <div className="my-5 h-px bg-yellow-500/20" />

            <div className="space-y-3 text-sm">
              <Benefit text="Membership NFT" />
              <Benefit text="Treasury Participation" />
              <Benefit text="Governance Access" />
              <Benefit text={`Effective Stake ${tier.multiplier}`} />
            </div>

            <a
              href={LINKS.app}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 block w-full rounded-2xl bg-gradient-to-r from-yellow-300 to-yellow-500 py-4 text-center text-sm font-black text-black transition hover:scale-[1.02]"
            >
              LAUNCH APP
            </a>
          </div>
        ))}
      </section>

      <SectionTitle id="tokenomics" title="TOKENOMICS" />

      <section className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-4 md:px-8">
        {tokenomics.map((item) => (
          <div key={item.title} className="rounded-3xl border border-yellow-500/20 bg-black/45 p-6">
            <p className="text-3xl font-black text-yellow-300">{item.value}</p>
            <h3 className="mt-3 font-black">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{item.text}</p>
          </div>
        ))}
      </section>

      <SectionTitle id="roadmap" title="ROADMAP" />

      <section className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-5 md:px-8">
        {roadmap.map((item) => (
          <div key={item.phase} className="rounded-3xl border border-yellow-500/20 bg-black/45 p-5 transition hover:border-green-400/40">
            <p className="text-xs font-black text-green-400">{item.phase}</p>
            <h3 className="mt-3 text-lg font-black text-yellow-300">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{item.text}</p>
            <p className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 px-3 py-2 text-xs font-black text-yellow-300">
              {item.status}
            </p>
          </div>
        ))}
      </section>

      <SectionTitle id="governance" title="COMMUNITY GOVERNANCE" />

      <section className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-6 rounded-3xl border border-green-500/20 bg-black/45 p-6 md:grid-cols-2 md:p-8">
          <div>
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400/10 text-3xl text-yellow-400">
              <FaVoteYea />
            </div>
            <h3 className="text-3xl font-black">Community Governance</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-300">
              Each Membership NFT may vote once per proposal.
              Voting power is determined by Membership level and effective staking participation.
              Treasury actions require governance approval and execution through smart contracts.
            </p>
          </div>

          <div className="grid gap-3">
            <GovernanceItem text="Treasury Allocations" />
            <GovernanceItem text="Liquidity Decisions" />
            <GovernanceItem text="Treasury Profit Distributions" />
            <GovernanceItem text="Future DAO Proposals" />
          </div>
        </div>
      </section>

      <SectionTitle title="TRANSPARENT BY DESIGN" />

      <section className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-5 md:px-8">
        {transparency.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-black/45 p-5 transition hover:border-yellow-400/40">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">
              {item.icon}
            </div>
            <h3 className="text-sm font-black">{item.title}</h3>
            <p className="mt-3 text-xs leading-5 text-zinc-400">{item.text}</p>
          </div>
        ))}
      </section>

      <SectionTitle title="FAQ" />

      <section className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-2 md:px-8">
        {faq.map((item) => (
          <div key={item.q} className="rounded-3xl border border-white/10 bg-black/45 p-6">
            <h3 className="font-black text-yellow-300">{item.q}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{item.a}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 pb-16 md:px-8">
        <div className="grid gap-5 rounded-3xl border border-green-500/30 bg-gradient-to-r from-green-500/10 to-yellow-500/10 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <h2 className="text-2xl font-black md:text-3xl">Ready to Become Part of NetGain DAO?</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Read the whitepaper or launch the official application to access membership and ecosystem features.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={LINKS.whitepaper}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-yellow-400/40 px-8 py-4 text-center text-sm font-black text-yellow-300 transition hover:bg-yellow-400 hover:text-black"
            >
              WHITEPAPER
            </a>
            <a
              href={LINKS.app}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-yellow-400 px-8 py-4 text-center text-sm font-black text-black transition hover:scale-105"
            >
              LAUNCH APP
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-yellow-500/20 px-4 py-8 text-xs text-zinc-500 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>©️ 2026 NetGain DAO. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <FooterLink href={LINKS.whitepaper} text="Whitepaper" />
            <FooterLink href={LINKS.discord} text="Discord" />
            <FooterLink href={LINKS.telegram} text="Telegram" />
            <FooterLink href={LINKS.x} text="X" />
            <FooterLink href={LINKS.bscscan} text="BscScan" />
          </div>
        </div>
      </footer>
    </main>
  );
}

function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[#010403]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(234,179,8,.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(34,197,94,.18),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(22,163,74,.13),transparent_35%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
    </>
  );
}

function SectionTitle({ title, id }: { title: string; id?: string }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 pt-16 text-center md:px-8">
      <h2 className="inline-flex items-center gap-4 text-2xl font-black tracking-widest md:text-4xl">
        <span className="h-px w-8 bg-yellow-400 md:w-10" />
        {title}
        <span className="h-px w-8 bg-yellow-400 md:w-10" />
      </h2>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  text,
  number,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  number: number;
}) {
  return (
    <div className="rounded-3xl border border-yellow-500/20 bg-black/45 p-6 text-center transition hover:-translate-y-1 hover:border-green-400/40">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-yellow-400/40 bg-green-500/10 text-2xl text-yellow-400">
        {icon}
      </div>
      <div className="mx-auto mb-4 flex h-7 w-7 items-center justify-center rounded-full bg-green-600 text-xs font-black">
        {number}
      </div>
      <h3 className="font-black">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
    </div>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <p className="flex items-center gap-3 text-zinc-200">
      <FaCheck className="text-yellow-400" />
      {text}
    </p>
  );
}

function GovernanceItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm font-black text-yellow-200">
      <FaCheck className="text-green-400" />
      {text}
    </div>
  );
}

function NavIcon({ href, icon }: { href: string; icon: ReactNode }) {
  return (
    <a
      href={href}
      target={href === "#" ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="text-zinc-300 transition hover:text-yellow-400"
    >
      {icon}
    </a>
  );
}

function MobileLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      target={href === "#" || href.startsWith("#") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-center text-yellow-300"
    >
      {text}
    </a>
  );
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      target={href === "#" ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="hover:text-yellow-400"
    >
      {text}
    </a>
  );
}