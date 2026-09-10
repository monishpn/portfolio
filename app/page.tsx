import type { Metadata } from "next";
import portfolio from "@/data/portfolio.json";
import PortfolioClient from "./portfolio-client";

export const metadata: Metadata = {
  title: `${portfolio.profile.name} — ${portfolio.profile.title}`,
  description: `Portfolio of ${portfolio.profile.name}, a backend software engineer building reliable services, cloud integrations, and production systems.`,
};

export default function Home() {
  return <PortfolioClient data={portfolio} />;
}
