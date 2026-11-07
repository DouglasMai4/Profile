import type { Locale } from '@/i18n';

type Text = Record<Locale, string>;

/** Places where a technology was actually used. Ids match `experience` and `projects`. */
export type PlaceId = 'goalfy' | 'ph2' | 'prisma' | 'freela' | 'kori' | 'fio' | 'kingdom' | 'site';

export interface Experience {
	id: PlaceId;
	company: string;
	role: Text;
	start: string;
	end: string | null;
	href?: string;
	notes: Text[];
}

export interface Project {
	id: PlaceId;
	name: string;
	summary: Text;
	role: Text;
	status: 'live' | 'building';
	image?: string;
	links: { label: 'site' | 'docs' | 'code'; href: string }[];
}

export interface Tech {
	name: string;
	area: Area;
	used: PlaceId[];
}

export type Area = 'backend' | 'frontend' | 'data' | 'ai' | 'infra';

export const areas: Area[] = ['backend', 'frontend', 'data', 'ai', 'infra'];

export const experience: Experience[] = [
	{
		id: 'goalfy',
		company: 'Goalfy',
		role: { 'pt-br': 'Arquiteto de Software', en: 'Software Architect' },
		start: '2026-01',
		end: null,
		href: 'https://goalfy.com.br',
		notes: [
			{
				'pt-br':
					'Desenhei a infraestrutura dos agentes de IA: Python, FastAPI, LangChain, LangGraph e PGVector para memória semântica, com streaming que aguenta falha.',
				en: 'Designed the AI agent runtime: Python, FastAPI, LangChain, LangGraph and PGVector for semantic memory, with streaming that survives failures.',
			},
			{
				'pt-br':
					'Escrevi o Goalfy Security (Go, Casbin, Redis PubSub) e o Data Connect, a esteira de dados em Go, Kafka e PostgreSQL, multi-tenant e com sync agendado.',
				en: 'Wrote Goalfy Security (Go, Casbin, Redis PubSub) and Data Connect, the Go, Kafka and PostgreSQL data pipeline, multi-tenant with scheduled sync.',
			},
			{
				'pt-br':
					'Cuido das decisões de arquitetura e dos contratos entre microsserviços, mexo no core em Java e puxei a migração do Kafka Confluent para um cluster nosso.',
				en: 'Own architecture decisions and the contracts between microservices, work on the Java core, and led the move from Confluent Kafka to a self-hosted cluster.',
			},
		],
	},
	{
		id: 'ph2',
		company: 'PH2',
		role: { 'pt-br': 'Dev Full Stack', en: 'Full Stack Developer' },
		start: '2025-04',
		end: '2026-01',
		notes: [
			{
				'pt-br':
					'Integrei a Meta Ads API de ponta a ponta: campanhas, textos e criativos gerados por IA.',
				en: 'Built the full Meta Ads API integration: campaigns, copy and AI-generated creatives.',
			},
			{
				'pt-br':
					'Troquei HTTP por gRPC e o tempo até o primeiro token caiu de 15s para 4s. Também fiz a auth própria e um cache de métricas para fugir de rate limit.',
				en: 'Swapped HTTP for gRPC and time to first token dropped from 15s to 4s. Also built our own auth and a metrics cache to dodge rate limits.',
			},
		],
	},
	{
		id: 'prisma',
		company: 'Prisma Consignado',
		role: { 'pt-br': 'Dev Full Stack', en: 'Full Stack Developer' },
		start: '2024-04',
		end: '2025-01',
		notes: [
			{
				'pt-br':
					'Fiz o módulo de FGTS do sistema SEA e automações com Puppeteer para conversar com Santander, BMG, BTG e Inbursa.',
				en: 'Built the FGTS module of the SEA system and Puppeteer automations talking to Santander, BMG, BTG and Inbursa.',
			},
		],
	},
	{
		id: 'freela',
		company: 'Freelancer',
		role: { 'pt-br': 'Dev Web', en: 'Web Developer' },
		start: '2023-01',
		end: '2023-12',
		notes: [
			{
				'pt-br': 'Landing pages, portais institucionais e sistemas sob medida em Vue.js.',
				en: 'Landing pages, company sites and custom systems in Vue.js.',
			},
		],
	},
];

export const projects: Project[] = [
	{
		id: 'kori',
		name: 'Kori',
		summary: {
			'pt-br':
				'Toolkit HTTP para Go em cima do Chi, inspirado no Hono. Validação, erros e OpenAPI sem cerimônia, do jeito idiomático do Go.',
			en: 'HTTP toolkit for Go on top of Chi, inspired by Hono. Validation, errors and OpenAPI without ceremony, the idiomatic Go way.',
		},
		role: { 'pt-br': 'autor · open source', en: 'author · open source' },
		status: 'building',
		image: '/kori.png',
		links: [
			{ label: 'docs', href: 'https://douglasmai4.github.io/kori-docs' },
			{ label: 'code', href: 'https://github.com/douglasmai4/kori' },
		],
	},
	{
		id: 'fio',
		name: 'Fio',
		summary: {
			'pt-br': 'SaaS para acompanhar rotinas e times. Go com SQLC e Postgres no back, React e Tailwind no front.',
			en: 'SaaS for keeping track of routines and teams. Go with SQLC and Postgres on the back, React and Tailwind on the front.',
		},
		role: { 'pt-br': 'criador', en: 'creator' },
    status: 'live',
		image: '/fio.png',
		links: [{ label: 'site', href: 'https://appfio.com.br' }],
	},
	{
		id: 'kingdom',
		name: 'Kingdom Softwares',
		summary: {
			'pt-br': 'Minha software house. A gente faz sistema sob medida para quem precisa de algo que não existe pronto.',
			en: 'My software house. We build custom systems for people who need something that does not exist off the shelf.',
		},
		role: { 'pt-br': 'fundador', en: 'founder' },
		status: 'live',
		image: '/kingdom-softwares.png',
		links: [{ label: 'site', href: 'https://kingdomsoftwares.com.br' }],
	},
];

export const stack: Tech[] = [
	{ name: 'Go', area: 'backend', used: ['goalfy', 'kori', 'fio'] },
	{ name: 'TypeScript', area: 'backend', used: ['ph2', 'kingdom', 'site'] },
	{ name: 'Node.js', area: 'backend', used: ['ph2', 'kingdom'] },
	{ name: 'Bun', area: 'backend', used: ['kingdom', 'site'] },
	{ name: 'Hono', area: 'backend', used: ['kingdom'] },
	{ name: 'Express', area: 'backend', used: ['ph2'] },
	{ name: 'Python', area: 'backend', used: ['goalfy', 'ph2'] },
	{ name: 'Java', area: 'backend', used: ['goalfy'] },
	{ name: 'PHP / Laravel', area: 'backend', used: ['prisma'] },
	{ name: 'gRPC', area: 'backend', used: ['ph2'] },
	{ name: 'Chi', area: 'backend', used: ['kori'] },
	{ name: 'React', area: 'frontend', used: ['goalfy', 'ph2', 'fio', 'kingdom'] },
	{ name: 'Astro', area: 'frontend', used: ['kingdom', 'site'] },
	{ name: 'Vue.js', area: 'frontend', used: ['freela'] },
	{ name: 'Tailwind', area: 'frontend', used: ['fio', 'site'] },
	{ name: 'Puppeteer', area: 'frontend', used: ['prisma'] },
	{ name: 'PostgreSQL', area: 'data', used: ['goalfy', 'fio', 'kingdom'] },
	{ name: 'MySQL', area: 'data', used: ['kingdom'] },
	{ name: 'Redis', area: 'data', used: ['goalfy'] },
	{ name: 'Kafka', area: 'data', used: ['goalfy'] },
	{ name: 'SQLC', area: 'data', used: ['fio'] },
	{ name: 'PGVector', area: 'ai', used: ['goalfy'] },
	{ name: 'LangChain', area: 'ai', used: ['goalfy'] },
	{ name: 'LangGraph', area: 'ai', used: ['goalfy'] },
	{ name: 'OpenAI Agents SDK', area: 'ai', used: ['ph2'] },
	{ name: 'Docker', area: 'infra', used: [] },
	{ name: 'Linux', area: 'infra', used: [] },
	{ name: 'OpenAPI', area: 'infra', used: ['kori'] },
	{ name: 'Casbin', area: 'infra', used: ['goalfy'] },
];

export const placeNames: Record<PlaceId, string> = {
	goalfy: 'Goalfy',
	ph2: 'PH2',
	prisma: 'Prisma Consignado',
	freela: 'Freelancer',
	kori: 'Kori',
	fio: 'Fio',
	kingdom: 'Kingdom Softwares',
	site: 'douglasmaia.dev.br',
};

export const contacts = [
	{ name: 'Email', value: 'contato@douglasmaia.dev.br', href: 'mailto:contato@douglasmaia.dev.br' },
	{ name: 'WhatsApp', value: '+55 47 99769-4522', href: 'https://wa.me/5547997694522' },
	{ name: 'LinkedIn', value: 'in/douglasmai4', href: 'https://linkedin.com/in/douglasmai4' },
	{ name: 'GitHub', value: 'douglasmai4', href: 'https://github.com/douglasmai4' },
	{ name: 'Telegram', value: '@douglasmai4', href: 'https://t.me/douglasmai4' },
];

export function yearRange(start: string, end: string | null, now: string): string {
	const s = start.slice(0, 4);
	const e = end ? end.slice(0, 4) : now;
	return s === e ? s : `${s}–${e}`;
}
