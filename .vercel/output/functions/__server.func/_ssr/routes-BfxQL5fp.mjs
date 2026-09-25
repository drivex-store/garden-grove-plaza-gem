import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trigger2, i as Root2, m as Slot, n as Header, r as Item, t as Content2, y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { C as CircleCheck, D as ChartColumn, E as Check, S as CodeXml, T as ChevronDown, _ as FileUp, a as Sun, b as Download, c as Monitor, d as Info, f as Folder, g as Files, h as FolderArchive, i as TriangleAlert, l as Menu, m as FolderOpen, n as WandSparkles, o as Search, p as FolderTree, r as Type, s as Moon, t as X, u as LoaderCircle, v as FileCode, w as ChevronRight, x as Copy, y as Ellipsis } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { a as Separator2, i as Root2$1, n as Item2, o as Trigger, r as Portal2, t as Content2$1 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { a as SelectItemIndicator, c as SelectTrigger$1, i as SelectItem$1, l as SelectValue$1, n as SelectContent$1, o as SelectItemText, r as SelectIcon, s as SelectPortal, t as Select$1, u as SelectViewport } from "../_libs/@radix-ui/react-select+[...].mjs";
import { a as dirFromPath, c as fileNameFromPath, d as joinPath, f as splitPath, i as countLines, l as formatBytes, n as byteSize, p as uid, r as cn, s as downloadText, u as formatNumber } from "./router-DbdCmhyC.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as pn, r as yn, t as bn } from "../_libs/react-resizable-panels.mjs";
import { a as ResponsiveContainer, i as Bar, n as YAxis, o as Tooltip, r as XAxis, t as BarChart } from "../_libs/recharts+[...].mjs";
import { t as Drawer } from "../_libs/vaul.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/radix-ui__react-slider.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BfxQL5fp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useMediaQuery(query) {
	const [matches, setMatches] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const mql = window.matchMedia(query);
		const onChange = () => setMatches(mql.matches);
		onChange();
		mql.addEventListener("change", onChange);
		return () => mql.removeEventListener("change", onChange);
	}, [query]);
	return matches;
}
/** Desktop multi-panel layout from the `md` breakpoint (768px) up. */
function useIsDesktop() {
	return useMediaQuery("(min-width: 768px)");
}
var DEFAULT_SETTINGS = {
	mode: "balanced",
	preserveComments: true,
	generateBarrel: true,
	generateReadme: true,
	generateTests: false,
	includeTypesFile: true,
	folderByKind: false,
	maxFileLines: 160,
	naming: "kebab"
};
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var ACTIONS = {
	"improve-names": {
		title: "Improve names",
		instruction: "Rename unclear symbols to precise, conventional names. Keep public APIs stable unless a name is misleading. Return the full updated file."
	},
	"extract-helpers": {
		title: "Extract helpers",
		instruction: "Pull repeated or dense logic into well-named helper functions in the same file. Return the full updated file."
	},
	"add-types": {
		title: "Add types",
		instruction: "Add or tighten types, interfaces, or annotations appropriate to the language. Do not change runtime behavior. Return the full updated file."
	},
	"add-docs": {
		title: "Add documentation",
		instruction: "Add concise module and public-API documentation comments. No marketing language. Return the full updated file."
	},
	"generate-tests": {
		title: "Generate tests",
		instruction: "Write a focused unit test file for the exports in this module. Return only the test file contents."
	},
	simplify: {
		title: "Simplify logic",
		instruction: "Simplify control flow and remove redundancy while preserving behavior. Return the full updated file."
	}
};
var REFACTOR_ACTIONS = ACTIONS;
var runRefactor = createServerFn({ method: "POST" }).validator((data) => {
	if (!data || typeof data !== "object") throw new Error("Invalid payload");
	const d = data;
	const action = d.action;
	if (typeof action !== "string" || !(action in ACTIONS)) throw new Error("Unknown action");
	if (typeof d.filePath !== "string" || typeof d.content !== "string" || typeof d.language !== "string") throw new Error("Invalid payload");
	return {
		action,
		filePath: d.filePath.slice(0, 240),
		content: d.content.slice(0, 12e3),
		language: d.language.slice(0, 40)
	};
}).handler(createSsrRpc("fc7cbc73f083660068a23073a59e9b01ff7605201087ab23ca54dc1365e1ed48"));
var EXT_MAP = {
	js: "javascript",
	jsx: "javascript",
	mjs: "javascript",
	cjs: "javascript",
	ts: "typescript",
	tsx: "typescript",
	mts: "typescript",
	cts: "typescript",
	py: "python",
	go: "go",
	rs: "rust",
	java: "java",
	rb: "ruby",
	css: "css",
	scss: "css",
	less: "css",
	html: "html",
	htm: "html",
	json: "json",
	md: "markdown",
	markdown: "markdown",
	php: "php",
	sql: "sql",
	sh: "shell",
	bash: "shell",
	zsh: "shell",
	vue: "javascript",
	svelte: "javascript"
};
var LANGUAGE_LABEL = {
	javascript: "JavaScript",
	typescript: "TypeScript",
	python: "Python",
	go: "Go",
	rust: "Rust",
	java: "Java",
	ruby: "Ruby",
	css: "CSS",
	html: "HTML",
	json: "JSON",
	markdown: "Markdown",
	php: "PHP",
	sql: "SQL",
	shell: "Shell",
	unknown: "Plain text"
};
var LANGUAGE_EXT = {
	javascript: "js",
	typescript: "ts",
	python: "py",
	go: "go",
	rust: "rs",
	java: "java",
	ruby: "rb",
	css: "css",
	html: "html",
	json: "json",
	markdown: "md",
	php: "php",
	sql: "sql",
	shell: "sh",
	unknown: "txt"
};
var MONACO_LANG = {
	javascript: "javascript",
	typescript: "typescript",
	python: "python",
	go: "go",
	rust: "rust",
	java: "java",
	ruby: "ruby",
	css: "css",
	html: "html",
	json: "json",
	markdown: "markdown",
	php: "php",
	sql: "sql",
	shell: "shell",
	unknown: "plaintext"
};
var KEYWORDS = /* @__PURE__ */ new Set([
	"if",
	"else",
	"for",
	"while",
	"switch",
	"case",
	"break",
	"return",
	"new",
	"this",
	"super",
	"class",
	"function",
	"const",
	"let",
	"var",
	"import",
	"export",
	"from",
	"default",
	"async",
	"await",
	"try",
	"catch",
	"finally",
	"throw",
	"typeof",
	"instanceof",
	"in",
	"of",
	"true",
	"false",
	"null",
	"undefined",
	"void",
	"yield",
	"with",
	"do",
	"continue",
	"debugger",
	"delete",
	"enum",
	"interface",
	"type",
	"package",
	"public",
	"private",
	"protected",
	"static",
	"implements",
	"extends",
	"def",
	"elif",
	"except",
	"lambda",
	"pass",
	"raise",
	"None",
	"True",
	"False",
	"self",
	"cls",
	"fn",
	"mut",
	"pub",
	"struct",
	"impl",
	"mod",
	"use",
	"func",
	"defer",
	"go",
	"chan",
	"select",
	"map",
	"range"
]);
function extensionOf(name) {
	const i = name.lastIndexOf(".");
	if (i <= 0) return "";
	return name.slice(i + 1).toLowerCase();
}
function detectLanguage(name, content) {
	const ext = extensionOf(name);
	if (ext && EXT_MAP[ext]) {
		if (EXT_MAP[ext] === "javascript" && /:\s*(string|number|boolean|unknown|void)\b/.test(content)) return "typescript";
		return EXT_MAP[ext];
	}
	const head = content.slice(0, 800);
	if (/^#!.*python/.test(head) || /^\s*(def|class|from|import)\s/m.test(head) && head.includes(":") && !head.includes("{")) return "python";
	if (/^package\s+\w+/.test(head) && /\bfunc\s+/.test(content)) return "go";
	if (/\b(fn|let mut|impl)\s/.test(head)) return "rust";
	if (/\b(interface|type)\s+\w+/.test(content) || /:\s*(string|number|boolean)\b/.test(content)) return "typescript";
	if (/\b(function|const|let|export|import)\b/.test(head)) return "javascript";
	if (/^\s*</.test(head) && /<\/?[a-z]/i.test(head)) return "html";
	if (/\{[\s\S]*:\s*[\s\S]*\}/.test(head) && head.trim().startsWith("{")) return "json";
	return "unknown";
}
function isJsLike(lang) {
	return lang === "javascript" || lang === "typescript";
}
function usesJsx(name, content) {
	const ext = extensionOf(name);
	if (ext === "tsx" || ext === "jsx") return true;
	return /<[A-Z][A-Za-z0-9]*[\s/>]/.test(content) || /className=/.test(content);
}
function fileExtensionFor(language, originalName, content) {
	const orig = extensionOf(originalName);
	if (language === "typescript") return usesJsx(originalName, content) || orig === "tsx" ? "tsx" : "ts";
	if (language === "javascript") return usesJsx(originalName, content) || orig === "jsx" ? "jsx" : "js";
	return LANGUAGE_EXT[language];
}
function isKeyword(name) {
	return KEYWORDS.has(name);
}
function monacoLanguage(language, path) {
	if (path.endsWith(".tsx")) return "typescript";
	if (path.endsWith(".jsx")) return "javascript";
	if (path.endsWith(".json")) return "json";
	if (path.endsWith(".md")) return "markdown";
	return MONACO_LANG[language];
}
var SAMPLES = {
	typescript: {
		label: "TypeScript · ForgeQueue",
		name: "forge-queue.ts",
		content: `/**
 * ForgeQueue — in-process job queue with retries, events, and an HTTP adapter.
 * Designed as a single file so Splitter Studio can carve it into modules.
 */

export type JobStatus = "pending" | "running" | "completed" | "failed" | "delayed";

export type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

export type Job<T = unknown> = {
  id: string;
  name: string;
  payload: T;
  status: JobStatus;
  attempts: number;
  maxAttempts: number;
  runAt: number;
  startedAt: number | null;
  finishedAt: number | null;
  error: string | null;
  result: unknown;
};

export type QueueOptions = {
  concurrency: number;
  pollIntervalMs: number;
  defaultMaxAttempts: number;
  backoffMs: number;
  name: string;
};

export type Logger = {
  debug(message: string, extra?: Record<string, unknown>): void;
  info(message: string, extra?: Record<string, unknown>): void;
  warn(message: string, extra?: Record<string, unknown>): void;
  error(message: string, extra?: Record<string, unknown>): void;
};

export type JobHandler<T = unknown> = (job: Job<T>) => Promise<unknown> | unknown;

export type QueueEvents = {
  "job:added": Job;
  "job:started": Job;
  "job:completed": Job;
  "job:failed": Job;
  "queue:idle": { name: string };
};

export class QueueError extends Error {
  readonly code: string;
  constructor(code: string, message: string) {
    super(message);
    this.name = "QueueError";
    this.code = code;
  }
}

export class HandlerMissingError extends QueueError {
  constructor(jobName: string) {
    super("HANDLER_MISSING", \`No handler registered for job "\${jobName}"\`);
  }
}

export function createId(prefix = "job"): string {
  const rand = Math.random().toString(36).slice(2, 8);
  const time = Date.now().toString(36);
  return \`\${prefix}_\${time}\${rand}\`;
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function now(): number {
  return Date.now();
}

export function computeBackoff(attempts: number, baseMs: number): number {
  const exp = Math.min(8, Math.max(0, attempts - 1));
  const jitter = Math.floor(Math.random() * 80);
  return baseMs * 2 ** exp + jitter;
}

export function serializeJob(job: Job): JsonValue {
  return {
    id: job.id,
    name: job.name,
    payload: job.payload as JsonValue,
    status: job.status,
    attempts: job.attempts,
    maxAttempts: job.maxAttempts,
    runAt: job.runAt,
    startedAt: job.startedAt,
    finishedAt: job.finishedAt,
    error: job.error,
    result: (job.result ?? null) as JsonValue,
  };
}

export class ConsoleLogger implements Logger {
  constructor(private readonly scope: string) {}

  debug(message: string, extra?: Record<string, unknown>) {
    this.write("debug", message, extra);
  }

  info(message: string, extra?: Record<string, unknown>) {
    this.write("info", message, extra);
  }

  warn(message: string, extra?: Record<string, unknown>) {
    this.write("warn", message, extra);
  }

  error(message: string, extra?: Record<string, unknown>) {
    this.write("error", message, extra);
  }

  private write(level: string, message: string, extra?: Record<string, unknown>) {
    const line = \`[\${this.scope}] \${level.toUpperCase()} \${message}\`;
    if (level === "error") console.error(line, extra ?? "");
    else if (level === "warn") console.warn(line, extra ?? "");
    else console.log(line, extra ?? "");
  }
}

type Listener<T> = (payload: T) => void;

export class EventBus<TEvents extends Record<string, unknown>> {
  private listeners = new Map<keyof TEvents, Set<Listener<unknown>>>();

  on<K extends keyof TEvents>(event: K, listener: Listener<TEvents[K]>) {
    const set = this.listeners.get(event) ?? new Set();
    set.add(listener as Listener<unknown>);
    this.listeners.set(event, set);
    return () => this.off(event, listener);
  }

  off<K extends keyof TEvents>(event: K, listener: Listener<TEvents[K]>) {
    this.listeners.get(event)?.delete(listener as Listener<unknown>);
  }

  emit<K extends keyof TEvents>(event: K, payload: TEvents[K]) {
    const set = this.listeners.get(event);
    if (!set) return;
    for (const listener of set) listener(payload);
  }
}

export class InMemoryJobStore {
  private jobs = new Map<string, Job>();

  insert(job: Job): Job {
    this.jobs.set(job.id, job);
    return job;
  }

  get(id: string): Job | undefined {
    return this.jobs.get(id);
  }

  update(id: string, patch: Partial<Job>): Job {
    const current = this.jobs.get(id);
    if (!current) throw new QueueError("NOT_FOUND", \`Job \${id} not found\`);
    const next = { ...current, ...patch };
    this.jobs.set(id, next);
    return next;
  }

  due(at: number, limit: number): Job[] {
    return [...this.jobs.values()]
      .filter((job) => (job.status === "pending" || job.status === "delayed") && job.runAt <= at)
      .sort((a, b) => a.runAt - b.runAt)
      .slice(0, limit);
  }

  list(): Job[] {
    return [...this.jobs.values()].sort((a, b) => a.runAt - b.runAt);
  }

  stats() {
    const all = this.list();
    const count = (status: JobStatus) => all.filter((job) => job.status === status).length;
    return {
      total: all.length,
      pending: count("pending"),
      running: count("running"),
      completed: count("completed"),
      failed: count("failed"),
      delayed: count("delayed"),
    };
  }
}

export class Worker {
  private active = 0;
  private timer: ReturnType<typeof setInterval> | null = null;

  constructor(
    private readonly store: InMemoryJobStore,
    private readonly handlers: Map<string, JobHandler>,
    private readonly events: EventBus<QueueEvents>,
    private readonly logger: Logger,
    private readonly options: QueueOptions,
  ) {}

  start() {
    if (this.timer) return;
    this.timer = setInterval(() => {
      void this.tick();
    }, this.options.pollIntervalMs);
    this.logger.info("worker started", { concurrency: this.options.concurrency });
  }

  stop() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    this.logger.info("worker stopped");
  }

  private async tick() {
    const available = this.options.concurrency - this.active;
    if (available <= 0) return;
    const batch = this.store.due(now(), available);
    if (batch.length === 0 && this.active === 0) {
      this.events.emit("queue:idle", { name: this.options.name });
      return;
    }
    for (const job of batch) {
      void this.run(job);
    }
  }

  private async run(job: Job) {
    this.active += 1;
    const started = this.store.update(job.id, { status: "running", startedAt: now(), attempts: job.attempts + 1 });
    this.events.emit("job:started", started);
    const handler = this.handlers.get(job.name);
    if (!handler) {
      const failed = this.store.update(job.id, {
        status: "failed",
        finishedAt: now(),
        error: new HandlerMissingError(job.name).message,
      });
      this.events.emit("job:failed", failed);
      this.active -= 1;
      return;
    }
    try {
      const result = await handler(started);
      const completed = this.store.update(job.id, {
        status: "completed",
        finishedAt: now(),
        result,
        error: null,
      });
      this.events.emit("job:completed", completed);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (started.attempts >= started.maxAttempts) {
        const failed = this.store.update(job.id, { status: "failed", finishedAt: now(), error: message });
        this.logger.error("job failed permanently", { id: job.id, message });
        this.events.emit("job:failed", failed);
      } else {
        const delay = computeBackoff(started.attempts, this.options.backoffMs);
        const delayed = this.store.update(job.id, {
          status: "delayed",
          runAt: now() + delay,
          error: message,
        });
        this.logger.warn("job retry scheduled", { id: job.id, delay });
        this.events.emit("job:failed", delayed);
      }
    } finally {
      this.active -= 1;
    }
  }
}

export class ForgeQueue {
  private readonly store = new InMemoryJobStore();
  private readonly handlers = new Map<string, JobHandler>();
  readonly events = new EventBus<QueueEvents>();
  private readonly worker: Worker;
  private readonly logger: Logger;
  readonly options: QueueOptions;

  constructor(options: Partial<QueueOptions> = {}, logger?: Logger) {
    this.options = {
      concurrency: 2,
      pollIntervalMs: 40,
      defaultMaxAttempts: 3,
      backoffMs: 120,
      name: "forge",
      ...options,
    };
    this.logger = logger ?? new ConsoleLogger(this.options.name);
    this.worker = new Worker(this.store, this.handlers, this.events, this.logger, this.options);
  }

  handle<T>(name: string, handler: JobHandler<T>) {
    this.handlers.set(name, handler as JobHandler);
    return this;
  }

  enqueue<T>(name: string, payload: T, extras?: { delayMs?: number; maxAttempts?: number }): Job<T> {
    const job: Job<T> = {
      id: createId("job"),
      name,
      payload,
      status: extras?.delayMs ? "delayed" : "pending",
      attempts: 0,
      maxAttempts: extras?.maxAttempts ?? this.options.defaultMaxAttempts,
      runAt: now() + (extras?.delayMs ?? 0),
      startedAt: null,
      finishedAt: null,
      error: null,
      result: null,
    };
    this.store.insert(job);
    this.events.emit("job:added", job);
    return job;
  }

  get(id: string) {
    return this.store.get(id);
  }

  stats() {
    return this.store.stats();
  }

  start() {
    this.worker.start();
    return this;
  }

  stop() {
    this.worker.stop();
    return this;
  }
}

export type HttpAdapterOptions = {
  prefix: string;
};

export function createHttpAdapter(queue: ForgeQueue, options: HttpAdapterOptions = { prefix: "/queue" }) {
  const prefix = options.prefix.replace(/\\/$/, "");
  return async function handleRequest(method: string, url: string, body?: unknown) {
    const path = url.split("?")[0] ?? url;
    if (method === "GET" && path === \`\${prefix}/stats\`) return queue.stats();
    if (method === "GET" && path.startsWith(\`\${prefix}/jobs/\`)) {
      const id = path.slice(\`\${prefix}/jobs/\`.length);
      return queue.get(id) ?? { error: "not_found" };
    }
    if (method === "POST" && path === \`\${prefix}/jobs\`) {
      const input = body as { name?: string; payload?: unknown; delayMs?: number };
      if (!input?.name) return { error: "name_required" };
      return queue.enqueue(input.name, input.payload, { delayMs: input.delayMs });
    }
    return { error: "not_found" };
  };
}

export function createForgeQueue(options?: Partial<QueueOptions>) {
  return new ForgeQueue(options);
}

export default createForgeQueue;
`
	},
	python: {
		label: "Python · Data pipeline",
		name: "pipeline.py",
		content: `"""Batch media pipeline: extract, transform, load, and report."""

from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path
from typing import Callable, Iterable, Iterator


@dataclass
class Record:
    id: str
    source: str
    payload: dict
    tags: list[str] = field(default_factory=list)


class ExtractError(RuntimeError):
    pass


class TransformError(RuntimeError):
    pass


def read_glob(root: Path, pattern: str) -> Iterator[Path]:
    for path in sorted(root.glob(pattern)):
        if path.is_file():
            yield path


def parse_line(raw: str, source: str) -> Record:
    parts = [part.strip() for part in raw.split("|")]
    if len(parts) < 2:
        raise ExtractError(f"Malformed line in {source}: {raw!r}")
    key, *rest = parts
    payload = {"text": " ".join(rest)}
    return Record(id=key, source=source, payload=payload)


class FileExtractor:
    def __init__(self, root: Path, pattern: str = "*.txt") -> None:
        self.root = root
        self.pattern = pattern

    def run(self) -> Iterator[Record]:
        for path in read_glob(self.root, self.pattern):
            for line in path.read_text(encoding="utf-8").splitlines():
                if not line.strip() or line.startswith("#"):
                    continue
                yield parse_line(line, str(path))


def lowercase_text(record: Record) -> Record:
    text = str(record.payload.get("text", "")).lower()
    record.payload["text"] = text
    return record


def tag_keywords(record: Record, keywords: Iterable[str]) -> Record:
    text = str(record.payload.get("text", ""))
    for word in keywords:
        if word in text and word not in record.tags:
            record.tags.append(word)
    return record


class Transformer:
    def __init__(self) -> None:
        self.steps: list[Callable[[Record], Record]] = []

    def use(self, step: Callable[[Record], Record]) -> "Transformer":
        self.steps.append(step)
        return self

    def run(self, records: Iterable[Record]) -> Iterator[Record]:
        for record in records:
            current = record
            for step in self.steps:
                current = step(current)
            yield current


class MemoryLoader:
    def __init__(self) -> None:
        self.rows: list[Record] = []

    def write(self, records: Iterable[Record]) -> int:
        count = 0
        for record in records:
            self.rows.append(record)
            count += 1
        return count

    def by_tag(self, tag: str) -> list[Record]:
        return [row for row in self.rows if tag in row.tags]


def summarize(loader: MemoryLoader) -> dict:
    tags: dict[str, int] = {}
    for row in loader.rows:
        for tag in row.tags:
            tags[tag] = tags.get(tag, 0) + 1
    return {"records": len(loader.rows), "tags": tags}


def build_default_pipeline(root: Path) -> tuple[FileExtractor, Transformer, MemoryLoader]:
    extractor = FileExtractor(root)
    transformer = Transformer().use(lowercase_text).use(lambda rec: tag_keywords(rec, ["error", "warn", "ok"]))
    loader = MemoryLoader()
    return extractor, transformer, loader


def run_pipeline(root: Path) -> dict:
    extractor, transformer, loader = build_default_pipeline(root)
    written = loader.write(transformer.run(extractor.run()))
    report = summarize(loader)
    report["written"] = written
    return report
`
	},
	javascript: {
		label: "JavaScript · Mini renderer",
		name: "mini-renderer.js",
		content: `/**
 * Mini renderer — hyperscript, a tiny diff, and a store.
 */

export function h(type, props, ...children) {
  const flat = children.flat(Infinity).filter((child) => child !== false && child !== null && child !== undefined);
  return { type, props: props || {}, children: flat };
}

export function createStore(initial) {
  let state = initial;
  const listeners = new Set();
  return {
    get() {
      return state;
    },
    set(next) {
      state = typeof next === "function" ? next(state) : next;
      listeners.forEach((fn) => fn(state));
      return state;
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
  };
}

function setProp(el, key, value) {
  if (key === "className") el.setAttribute("class", value ?? "");
  else if (key === "style" && value && typeof value === "object") Object.assign(el.style, value);
  else if (key.startsWith("on") && typeof value === "function") el[key.toLowerCase()] = value;
  else if (value === false || value === null || value === undefined) el.removeAttribute(key);
  else el.setAttribute(key, String(value));
}

export function createElement(vnode) {
  if (typeof vnode === "string" || typeof vnode === "number") {
    return document.createTextNode(String(vnode));
  }
  const el = document.createElement(vnode.type);
  Object.entries(vnode.props).forEach(([key, value]) => setProp(el, key, value));
  vnode.children.forEach((child) => el.appendChild(createElement(child)));
  return el;
}

function changed(a, b) {
  return typeof a !== typeof b || a.type !== b.type || (typeof a === "string" && a !== b);
}

export function patch(parent, newNode, oldNode, index = 0) {
  if (!oldNode) {
    parent.appendChild(createElement(newNode));
    return;
  }
  if (!newNode) {
    if (parent.childNodes[index]) parent.removeChild(parent.childNodes[index]);
    return;
  }
  if (changed(newNode, oldNode)) {
    parent.replaceChild(createElement(newNode), parent.childNodes[index]);
    return;
  }
  if (typeof newNode === "string") return;
  const max = Math.max(newNode.children.length, oldNode.children.length);
  for (let i = 0; i < max; i += 1) {
    patch(parent.childNodes[index], newNode.children[i], oldNode.children[i], i);
  }
}

export function mount(root, view, store) {
  let current = view(store.get());
  root.appendChild(createElement(current));
  return store.subscribe((state) => {
    const next = view(state);
    patch(root, next, current, 0);
    current = next;
  });
}

export function CounterView(state) {
  return h("div", { className: "counter" },
    h("p", { className: "count" }, String(state.count)),
    h("button", { onClick: () => {} }, "Increment"),
  );
}

export default function createApp(root, initial = { count: 0 }) {
  const store = createStore(initial);
  const unmount = mount(root, CounterView, store);
  return { store, unmount, increment: () => store.set((s) => ({ count: s.count + 1 })) };
}
`
	}
};
function sourceFromSample(id) {
	const sample = SAMPLES[id];
	return {
		name: sample.name,
		content: sample.content,
		language: detectLanguage(sample.name, sample.content),
		extension: extensionOf(sample.name)
	};
}
function sourceFromFile(name, content) {
	return {
		name,
		content,
		language: detectLanguage(name, content),
		extension: extensionOf(name)
	};
}
function complexityOf(content) {
	return content.match(/\b(if|else if|elif|for|while|switch|case|catch|&&|\|\||\?)\b/g)?.length ?? 0;
}
function analyzeProject(files, source, settings) {
	const folders = new Set(files.map((f) => dirFromPath(f.path)).filter(Boolean));
	const fileSizes = files.map((f) => ({
		path: f.path,
		lines: countLines(f.content)
	})).sort((a, b) => b.lines - a.lines);
	const totalLines = fileSizes.reduce((n, f) => n + f.lines, 0);
	const totalBytes = files.reduce((n, f) => n + byteSize(f.content), 0);
	const largestFile = fileSizes[0] ?? null;
	const langMap = /* @__PURE__ */ new Map();
	for (const file of files) {
		const cur = langMap.get(file.language) ?? {
			files: 0,
			lines: 0
		};
		cur.files += 1;
		cur.lines += countLines(file.content);
		langMap.set(file.language, cur);
	}
	const complexityScore = files.reduce((n, f) => n + complexityOf(f.content), 0);
	const dependencies = files.flatMap((f) => f.imports.map((to) => ({
		from: f.path,
		to
	})));
	const warnings = [];
	const suggestions = [];
	for (const file of files) {
		const lines = countLines(file.content);
		if (file.kind === "code" && lines > settings.maxFileLines) warnings.push({
			id: `oversize-${file.id}`,
			severity: "warn",
			message: `${file.path} has ${lines} lines (limit ${settings.maxFileLines}).`,
			path: file.path
		});
		if (lines > 320 && file.kind === "code") warnings.push({
			id: `huge-${file.id}`,
			severity: "error",
			message: `${file.path} is still very large (${lines} lines). Try Maximum split.`,
			path: file.path
		});
		if (file.content.trim().length === 0) warnings.push({
			id: `empty-${file.id}`,
			severity: "warn",
			message: `${file.path} is empty.`,
			path: file.path
		});
	}
	const pair = new Set(dependencies.map((d) => `${d.from}→${d.to}`));
	for (const dep of dependencies) if (pair.has(`${dep.to}→${dep.from}`)) warnings.push({
		id: `cycle-${dep.from}-${dep.to}`,
		severity: "warn",
		message: `Possible circular import between ${dep.from} and ${dep.to}.`,
		path: dep.from
	});
	const codeFiles = files.filter((f) => f.kind === "code");
	if (codeFiles.length === 1 && countLines(source.content) > 80) suggestions.push({
		id: "try-balanced",
		title: "Split produced a single module",
		detail: "The parser found few top-level units. Try Balanced or Maximum, or paste a file with more declarations."
	});
	if (settings.mode === "minimal" && (largestFile?.lines ?? 0) > 180) suggestions.push({
		id: "upgrade-mode",
		title: "Move to Balanced split",
		detail: "Minimal mode left a large module. Balanced groups by concern and respects the line budget."
	});
	if (settings.mode === "maximum" && files.length > 24) suggestions.push({
		id: "too-granular",
		title: "Maximum split is very granular",
		detail: "Consider Balanced mode or turning off kind folders for a smaller tree."
	});
	if (!settings.generateBarrel && files.length > 4 && (source.language === "typescript" || source.language === "javascript" || source.language === "python")) suggestions.push({
		id: "add-barrel",
		title: "Add a barrel index",
		detail: "A generated index file makes the split project easier to import from a single entry."
	});
	if (!settings.generateTests && codeFiles.length >= 3) suggestions.push({
		id: "add-tests",
		title: "Generate test stubs",
		detail: "Enable test stubs in advanced settings to drop describe/it scaffolds beside each module."
	});
	if (complexityScore / Math.max(1, codeFiles.length) > 18) suggestions.push({
		id: "ai-simplify",
		title: "High branching complexity",
		detail: "Open a dense file in Preview and run Simplify logic from AI refactoring."
	});
	const uniqueWarnings = warnings.filter((w, i, arr) => arr.findIndex((x) => x.message === w.message) === i);
	return {
		files: files.length,
		folders: folders.size,
		totalLines,
		totalBytes,
		avgLinesPerFile: files.length ? Math.round(totalLines / files.length) : 0,
		largestFile,
		languageBreakdown: [...langMap.entries()].map(([language, v]) => ({
			language,
			...v
		})),
		fileSizes: fileSizes.slice(0, 16),
		complexityScore,
		warnings: uniqueWarnings,
		suggestions,
		dependencies
	};
}
function splitWords(name) {
	return name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2").split(/[\s._/-]+/).filter(Boolean);
}
function cap(word) {
	return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
function toFileName(name, naming) {
	const words = splitWords(name);
	if (words.length === 0) return "module";
	switch (naming) {
		case "kebab": return words.map((w) => w.toLowerCase()).join("-");
		case "snake": return words.map((w) => w.toLowerCase()).join("_");
		case "camel": return words.map((w, i) => i === 0 ? w.toLowerCase() : cap(w)).join("");
		case "pascal": return words.map(cap).join("");
		default: return words.map((w) => w.toLowerCase()).join("-");
	}
}
function uniquePath(path, used) {
	if (!used.has(path)) {
		used.add(path);
		return path;
	}
	const { dir, base, ext } = splitPath(path);
	let n = 2;
	while (used.has(joinPath(dir, `${base}-${n}${ext}`))) n += 1;
	const next = joinPath(dir, `${base}-${n}${ext}`);
	used.add(next);
	return next;
}
function concernKey(name) {
	const words = splitWords(name);
	if (words.length === 0) return "misc";
	const last = words[words.length - 1]?.toLowerCase() ?? "misc";
	if (last.length <= 2 && words.length >= 2) return words[words.length - 2].toLowerCase();
	return last;
}
function relativeImport(fromPath, toPath) {
	const fromDir = fromPath.split("/").slice(0, -1).filter(Boolean);
	const toParts = toPath.replace(/\.(tsx|ts|jsx|js|mjs|cjs)$/i, "").split("/").filter(Boolean);
	let i = 0;
	while (i < fromDir.length && i < toParts.length - 1 && fromDir[i] === toParts[i]) i += 1;
	const ups = fromDir.length - i;
	const down = toParts.slice(i);
	const rel = [...Array.from({ length: ups }, () => ".."), ...down].join("/") || ".";
	return rel.startsWith(".") ? rel : `./${rel}`;
}
function pythonRelativeImport(fromPath, toPath, names) {
	const fromDir = fromPath.split("/").slice(0, -1).filter(Boolean);
	const toParts = toPath.replace(/\.py$/i, "").split("/").filter(Boolean);
	let i = 0;
	while (i < fromDir.length && i < toParts.length - 1 && fromDir[i] === toParts[i]) i += 1;
	const ups = fromDir.length - i;
	const down = toParts.slice(i);
	return `from ${".".repeat(ups + 1)}${down.join(".")} import ${names.join(", ")}`;
}
function lineAt(source, index) {
	let line = 1;
	for (let i = 0; i < index && i < source.length; i += 1) if (source.charCodeAt(i) === 10) line += 1;
	return line;
}
function skipLineComment(src, i) {
	const n = src.indexOf("\n", i);
	return n === -1 ? src.length : n;
}
function skipBlockComment(src, i) {
	const n = src.indexOf("*/", i + 2);
	return n === -1 ? src.length : n + 2;
}
function skipString(src, i, quote) {
	let p = i + 1;
	while (p < src.length) {
		const ch = src[p];
		if (ch === "\\") {
			p += 2;
			continue;
		}
		if (ch === quote) return p + 1;
		p += 1;
	}
	return src.length;
}
function skipTemplate(src, i) {
	let p = i + 1;
	while (p < src.length) {
		const ch = src[p];
		if (ch === "\\") {
			p += 2;
			continue;
		}
		if (ch === "`") return p + 1;
		if (ch === "$" && src[p + 1] === "{") {
			p = skipBraced(src, p + 1);
			continue;
		}
		p += 1;
	}
	return src.length;
}
function skipBraced(src, i) {
	const open = src[i];
	const close = open === "(" ? ")" : open === "[" ? "]" : "}";
	let depth = 0;
	let p = i;
	while (p < src.length) {
		const ch = src[p];
		if (ch === "/" && src[p + 1] === "/") {
			p = skipLineComment(src, p);
			continue;
		}
		if (ch === "/" && src[p + 1] === "*") {
			p = skipBlockComment(src, p);
			continue;
		}
		if (ch === "'" || ch === "\"") {
			p = skipString(src, p, ch);
			continue;
		}
		if (ch === "`") {
			p = skipTemplate(src, p);
			continue;
		}
		if (ch === open) depth += 1;
		else if (ch === close) {
			depth -= 1;
			if (depth === 0) return p + 1;
		}
		p += 1;
	}
	return src.length;
}
function skipWs(src, i) {
	let p = i;
	while (p < src.length && /\s/.test(src[p])) p += 1;
	return p;
}
function skipJsTrivia(src, i) {
	let p = i;
	while (p < src.length) {
		const n = skipWs(src, p);
		if (src[n] === "/" && src[n + 1] === "/") {
			p = skipLineComment(src, n);
			continue;
		}
		if (src[n] === "/" && src[n + 1] === "*") {
			p = skipBlockComment(src, n);
			continue;
		}
		return n;
	}
	return src.length;
}
function skipValue(src, i) {
	let p = skipJsTrivia(src, i);
	const ch = src[p];
	if (ch === "(" || ch === "{" || ch === "[") return skipBraced(src, p);
	if (ch === "'" || ch === "\"") return skipString(src, p, ch);
	if (ch === "`") return skipTemplate(src, p);
	while (p < src.length) {
		const c = src[p];
		if (c === "/" && src[p + 1] === "/") {
			p = skipLineComment(src, p);
			continue;
		}
		if (c === "/" && src[p + 1] === "*") {
			p = skipBlockComment(src, p);
			continue;
		}
		if (c === "'" || c === "\"") {
			p = skipString(src, p, c);
			continue;
		}
		if (c === "`") {
			p = skipTemplate(src, p);
			continue;
		}
		if (c === "(" || c === "{" || c === "[") {
			p = skipBraced(src, p);
			continue;
		}
		if (c === ";" || c === "\n") return c === ";" ? p + 1 : p;
		p += 1;
	}
	return src.length;
}
function skipStatement(src, i) {
	let p = i;
	while (p < src.length) {
		const ch = src[p];
		if (ch === "/" && src[p + 1] === "/") {
			p = skipLineComment(src, p);
			continue;
		}
		if (ch === "/" && src[p + 1] === "*") {
			p = skipBlockComment(src, p);
			continue;
		}
		if (ch === "'" || ch === "\"") {
			p = skipString(src, p, ch);
			continue;
		}
		if (ch === "`") {
			p = skipTemplate(src, p);
			continue;
		}
		if (ch === "(" || ch === "{" || ch === "[") {
			p = skipBraced(src, p);
			continue;
		}
		if (ch === ";" || ch === "\n") return ch === ";" ? p + 1 : p + 1;
		p += 1;
	}
	return src.length;
}
function matchJsDecl(slice) {
	const exportMatch = /^(export\s+)/.exec(slice);
	const rest = exportMatch ? slice.slice(exportMatch[0].length) : slice;
	const exported = Boolean(exportMatch);
	const def = /^(default\s+)/.exec(rest);
	const afterDef = def ? rest.slice(def[0].length) : rest;
	let m = /^(async\s+)?function\s*\*?\s*([A-Za-z_$][\w$]*)?/.exec(afterDef);
	if (m) return {
		kind: "function",
		name: m[2] || (def ? "default" : "anonymous"),
		exported,
		declared: m[2] ? [m[2]] : [],
		consumeFrom: 0
	};
	m = /^(abstract\s+)?class\s+([A-Za-z_$][\w$]*)/.exec(afterDef);
	if (m) return {
		kind: "class",
		name: m[2],
		exported,
		declared: [m[2]],
		consumeFrom: 0
	};
	m = /^interface\s+([A-Za-z_$][\w$]*)/.exec(afterDef);
	if (m) return {
		kind: "type",
		name: m[1],
		exported,
		declared: [m[1]],
		consumeFrom: 0
	};
	m = /^type\s+([A-Za-z_$][\w$]*)/.exec(afterDef);
	if (m) return {
		kind: "type",
		name: m[1],
		exported,
		declared: [m[1]],
		consumeFrom: 0
	};
	m = /^enum\s+([A-Za-z_$][\w$]*)/.exec(afterDef);
	if (m) return {
		kind: "type",
		name: m[1],
		exported,
		declared: [m[1]],
		consumeFrom: 0
	};
	m = /^(declare\s+)?(const|let|var)\s+([A-Za-z_$][\w$]*)/.exec(afterDef);
	if (m) {
		const name = m[3];
		return {
			kind: /=\s*(async\s*)?(\(|[A-Za-z_$][\w$]*\s*=>)/.test(afterDef) ? "function" : "const",
			name,
			exported,
			declared: [name],
			consumeFrom: 0
		};
	}
	if (/^import\b/.test(slice) || exported && /^\{/.test(rest) || exported && /^from\b/.test(rest)) return {
		kind: "import",
		name: "imports",
		exported,
		declared: [],
		consumeFrom: 0
	};
	if (exported && /^default\b/.test(rest)) return {
		kind: "other",
		name: "default",
		exported: true,
		declared: [],
		consumeFrom: 0
	};
	return null;
}
function endOfDecl(src, start, kind) {
	let p = start;
	if (kind === "type" || kind === "class" || kind === "function") {
		while (p < src.length) {
			const ch = src[p];
			if (ch === "/" && src[p + 1] === "/") {
				p = skipLineComment(src, p);
				continue;
			}
			if (ch === "/" && src[p + 1] === "*") {
				p = skipBlockComment(src, p);
				continue;
			}
			if (ch === "'" || ch === "\"") {
				p = skipString(src, p, ch);
				continue;
			}
			if (ch === "`") {
				p = skipTemplate(src, p);
				continue;
			}
			if (ch === "(" || ch === "[" || ch === "{") {
				p = skipBraced(src, p);
				if (kind !== "type") {
					p = skipWs(src, p);
					if (src[p] === ";") p += 1;
					return p;
				}
				continue;
			}
			if (ch === "=") {
				p = skipValue(src, p + 1);
				p = skipWs(src, p);
				if (src[p] === ";") p += 1;
				return p;
			}
			if (ch === ";" || ch === "\n") return ch === ";" ? p + 1 : p;
			p += 1;
		}
		return src.length;
	}
	if (kind === "const" || kind === "import" || kind === "other") return skipStatement(src, start);
	return skipStatement(src, start);
}
function parseJsLike(source) {
	const units = [];
	let i = 0;
	while (i < source.length) {
		const triviaStart = i;
		i = skipJsTrivia(source, i);
		if (i >= source.length) break;
		if (i > triviaStart) {
			const trivia = source.slice(triviaStart, i);
			if (trivia.includes("/*") || trivia.includes("//")) {
				const text = trivia.trim();
				if (text.length > 0 && units.length === 0) units.push({
					kind: "comment",
					name: "header",
					text,
					startLine: lineAt(source, triviaStart),
					endLine: lineAt(source, i),
					exported: false,
					declared: []
				});
			}
		}
		const decl = matchJsDecl(source.slice(i, i + 240));
		if (!decl) {
			const end = skipStatement(source, i);
			if (source.slice(i, end).trim()) units.push({
				kind: "other",
				name: `block${units.length + 1}`,
				text: source.slice(i, end),
				startLine: lineAt(source, i),
				endLine: lineAt(source, Math.max(i, end - 1)),
				exported: false,
				declared: []
			});
			i = Math.max(end, i + 1);
			continue;
		}
		const end = endOfDecl(source, i, decl.kind);
		units.push({
			kind: decl.kind,
			name: decl.name,
			text: source.slice(i, end),
			startLine: lineAt(source, i),
			endLine: lineAt(source, Math.max(i, end - 1)),
			exported: decl.exported,
			declared: decl.declared
		});
		i = Math.max(end, i + 1);
	}
	return units;
}
function pythonIndent(line) {
	let n = 0;
	for (const ch of line) if (ch === " ") n += 1;
	else if (ch === "	") n += 4;
	else break;
	return n;
}
function parsePython(source) {
	const lines = source.split("\n");
	const units = [];
	let i = 0;
	while (i < lines.length && (lines[i].trim() === "" || lines[i].startsWith("#") || lines[i].startsWith("\"\"\"") || lines[i].startsWith("'''") || /^(import|from)\s/.test(lines[i]))) i += 1;
	if (i > 0) {
		const header = lines.slice(0, i).join("\n");
		units.push({
			kind: "import",
			name: "header",
			text: header,
			startLine: 1,
			endLine: i,
			exported: false,
			declared: []
		});
	}
	while (i < lines.length) {
		const line = lines[i];
		if (line.trim() === "") {
			i += 1;
			continue;
		}
		if (pythonIndent(line) !== 0) {
			i += 1;
			continue;
		}
		const def = /^(async\s+)?def\s+([A-Za-z_][\w]*)/.exec(line);
		const cls = /^class\s+([A-Za-z_][\w]*)/.exec(line);
		const start = i;
		i += 1;
		while (i < lines.length) {
			const next = lines[i];
			if (next.trim() === "") {
				i += 1;
				continue;
			}
			if (pythonIndent(next) > 0) {
				i += 1;
				continue;
			}
			break;
		}
		let end = i;
		while (end > start + 1 && lines[end - 1].trim() === "") end -= 1;
		const name = def?.[2] ?? cls?.[1] ?? `block${units.length + 1}`;
		units.push({
			kind: cls ? "class" : def ? "function" : "other",
			name,
			text: lines.slice(start, end).join("\n"),
			startLine: start + 1,
			endLine: end,
			exported: !name.startsWith("_"),
			declared: [name]
		});
	}
	return units;
}
function parseGo(source) {
	const units = [];
	let i = 0;
	while (i < source.length) {
		i = skipJsTrivia(source, i);
		if (i >= source.length) break;
		const slice = source.slice(i, i + 200);
		let kind = "other";
		let name = `block${units.length + 1}`;
		let m = /^func\s+(\([^)]+\)\s*)?([A-Za-z_][\w]*)/.exec(slice);
		if (m) {
			kind = "function";
			name = m[2];
		} else if (m = /^type\s+([A-Za-z_][\w]*)/.exec(slice)) {
			kind = "type";
			name = m[1];
		} else if (/^(import|package)\b/.test(slice)) {
			kind = "import";
			name = "header";
		} else if (m = /^(const|var)\s+([A-Za-z_][\w]*)/.exec(slice)) {
			kind = "const";
			name = m[2];
		}
		const end = endOfDecl(source, i, kind === "import" ? "other" : kind);
		units.push({
			kind,
			name,
			text: source.slice(i, end),
			startLine: lineAt(source, i),
			endLine: lineAt(source, Math.max(i, end - 1)),
			exported: /^[A-Z]/.test(name),
			declared: name === "header" ? [] : [name]
		});
		i = Math.max(end, i + 1);
	}
	return units;
}
function parseGeneric(source, maxChunk = 80) {
	const parts = source.split(/\n{2,}/);
	const units = [];
	let line = 1;
	let buf = [];
	let bufStart = 1;
	const flush = (name) => {
		if (buf.length === 0) return;
		const text = buf.join("\n\n");
		const endLine = line - 1;
		units.push({
			kind: "other",
			name: name ?? `part${units.length + 1}`,
			text,
			startLine: bufStart,
			endLine: Math.max(bufStart, endLine),
			exported: true,
			declared: []
		});
		buf = [];
	};
	for (const part of parts) {
		const partLines = part.split("\n").length;
		if (buf.length === 0) bufStart = line;
		buf.push(part);
		line += partLines + 1;
		if (buf.join("\n\n").split("\n").length >= maxChunk) flush();
	}
	flush();
	if (units.length === 0 && source.trim()) units.push({
		kind: "other",
		name: "source",
		text: source,
		startLine: 1,
		endLine: lineAt(source, source.length),
		exported: true,
		declared: []
	});
	return units;
}
function parseSource(source, language) {
	if (isJsLike(language)) return parseJsLike(source);
	if (language === "python") return parsePython(source);
	if (language === "go") return parseGo(source);
	if (language === "json") return [{
		kind: "other",
		name: "data",
		text: source,
		startLine: 1,
		endLine: lineAt(source, source.length),
		exported: true,
		declared: []
	}];
	return parseGeneric(source);
}
function leadingImports(units) {
	const header = units.filter((u) => u.kind === "import" || u.kind === "comment" && u.name === "header").map((u) => u.text.trimEnd()).join("\n");
	return header.trim() ? `${header.trim()}\n` : "";
}
function filesToTree(files) {
	const root = [];
	const folders = /* @__PURE__ */ new Map();
	const ensureFolder = (path) => {
		if (!path) return root;
		const existing = folders.get(path);
		if (existing) return existing.children;
		const parentPath = dirFromPath(path);
		const siblings = ensureFolder(parentPath);
		const folder = {
			id: `folder:${path}`,
			name: fileNameFromPath(path),
			path,
			type: "folder",
			children: []
		};
		folders.set(path, folder);
		siblings.push(folder);
		siblings.sort((a, b) => {
			if (a.type !== b.type) return a.type === "folder" ? -1 : 1;
			return a.name.localeCompare(b.name);
		});
		return folder.children;
	};
	const sorted = [...files].sort((a, b) => a.path.localeCompare(b.path));
	for (const file of sorted) {
		const siblings = ensureFolder(dirFromPath(file.path));
		siblings.push({
			id: file.id,
			name: fileNameFromPath(file.path),
			path: file.path,
			type: "file",
			language: file.language,
			kind: file.kind,
			children: []
		});
		siblings.sort((a, b) => {
			if (a.type !== b.type) return a.type === "folder" ? -1 : 1;
			return a.name.localeCompare(b.name);
		});
	}
	return root;
}
function listFolders(files) {
	const set = /* @__PURE__ */ new Set();
	for (const file of files) {
		const dir = dirFromPath(file.path);
		if (!dir) continue;
		const parts = dir.split("/");
		let acc = "";
		for (const part of parts) {
			acc = joinPath(acc, part);
			set.add(acc);
		}
	}
	return [...set].sort();
}
function unifiedDiff(a, b) {
	const aLines = a.split("\n");
	const bLines = b.split("\n");
	const n = aLines.length;
	const m = bLines.length;
	const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
	for (let i = n - 1; i >= 0; i -= 1) for (let j = m - 1; j >= 0; j -= 1) dp[i][j] = aLines[i] === bLines[j] ? (dp[i + 1][j + 1] ?? 0) + 1 : Math.max(dp[i + 1][j] ?? 0, dp[i][j + 1] ?? 0);
	const out = [];
	let i = 0;
	let j = 0;
	while (i < n && j < m) if (aLines[i] === bLines[j]) {
		out.push({
			type: "same",
			text: aLines[i]
		});
		i += 1;
		j += 1;
	} else if ((dp[i + 1][j] ?? 0) >= (dp[i][j + 1] ?? 0)) {
		out.push({
			type: "del",
			text: aLines[i]
		});
		i += 1;
	} else {
		out.push({
			type: "add",
			text: bLines[j]
		});
		j += 1;
	}
	while (i < n) {
		out.push({
			type: "del",
			text: aLines[i]
		});
		i += 1;
	}
	while (j < m) {
		out.push({
			type: "add",
			text: bLines[j]
		});
		j += 1;
	}
	return out;
}
function formatCode(content, path) {
	if (path.endsWith(".json")) try {
		return `${JSON.stringify(JSON.parse(content), null, 2)}\n`;
	} catch {
		return content;
	}
	const lines = content.replace(/\t/g, "  ").split("\n");
	let indent = 0;
	const out = [];
	for (const raw of lines) {
		const trimmed = raw.trimEnd().trim();
		if (!trimmed) {
			out.push("");
			continue;
		}
		const closers = (trimmed.match(/^[\}\]\)]+/) ?? [""])[0].length;
		indent = Math.max(0, indent - closers);
		if (trimmed.startsWith("}") || trimmed.startsWith("]") || trimmed.startsWith(")")) {} else if (/^[\}\]\)]/.test(trimmed)) indent = Math.max(0, indent - 1);
		const level = /^(\}|\]|\))/.test(trimmed) && !trimmed.includes("{") ? indent : indent;
		out.push(`${"  ".repeat(level)}${trimmed}`);
		const opens = (trimmed.match(/[\{\[\(]/g) ?? []).length;
		const closes = (trimmed.match(/[\}\]\)]/g) ?? []).length;
		indent = Math.max(0, indent + opens - closes);
	}
	return `${out.join("\n").replace(/\n{3,}/g, "\n\n")}\n`;
}
function projectAsText(files) {
	return files.map((f) => `// ===== ${f.path} =====\n${f.content.trimEnd()}\n`).join("\n");
}
function renamePath(path, nextName) {
	const dir = dirFromPath(path);
	return dir ? `${dir}/${nextName}` : nextName;
}
function movePath(path, folder) {
	const { file } = splitPath(path);
	return folder ? `${folder}/${file}` : file;
}
function commentPrefix(language) {
	if (language === "python" || language === "shell") return {
		start: "# ",
		end: ""
	};
	if (language === "html") return {
		start: "<!-- ",
		end: " -->"
	};
	if (language === "css") return {
		start: "/* ",
		end: " */"
	};
	return {
		start: "// ",
		end: ""
	};
}
function fileComment(language, text) {
	const { start, end } = commentPrefix(language);
	return `${start}${text}${end}\n`;
}
function wrapUnit(unit, settings, language) {
	const body = unit.text.trimEnd();
	if (!settings.preserveComments) return `${body}\n`;
	if (unit.kind === "comment" || unit.kind === "import") return `${body}\n`;
	return `${fileComment(language, `${unit.kind}: ${unit.name}  (lines ${unit.startLine}–${unit.endLine})`)}${body}\n`;
}
function usedSymbols(content, symbols) {
	const used = [];
	for (const name of symbols) {
		if (name.length < 2 || isKeyword(name)) continue;
		if (new RegExp(`(^|[^A-Za-z0-9_$])${name}([^A-Za-z0-9_$]|$)`).test(content)) used.push(name);
	}
	return used;
}
function filterOriginalImports(importBlock, body) {
	if (!importBlock.trim()) return "";
	const lines = importBlock.split("\n");
	const kept = [];
	for (const line of lines) {
		if (!/^\s*(import|from|using|require|#include|package)\b/.test(line) && !line.trim().startsWith("//") && !line.trim().startsWith("#") && !line.trim().startsWith("/*") && line.trim() !== "*" && !line.includes("*/")) {
			if (line.trim() === "") kept.push(line);
			continue;
		}
		const interesting = Array.from(line.matchAll(/[A-Za-z_$][\w$]*/g)).map((m) => m[0]).filter((n) => n.length > 1 && !isKeyword(n) && ![
			"from",
			"import",
			"as",
			"type"
		].includes(n));
		if (interesting.length === 0 || interesting.some((n) => usedSymbols(body, [n]).length > 0)) kept.push(line);
	}
	return kept.join("\n").trim() ? `${kept.join("\n").trim()}\n` : "";
}
function planFiles(units, settings, ext, root) {
	const codeUnits = units.filter((u) => u.kind !== "import" && u.kind !== "comment");
	const types = codeUnits.filter((u) => u.kind === "type");
	const rest = codeUnits.filter((u) => u.kind !== "type");
	const srcRoot = `${root}/src`;
	if (settings.mode === "minimal") {
		const files = [];
		if (settings.includeTypesFile && types.length) files.push({
			path: `${srcRoot}/types.${ext}`,
			units: types,
			kind: "types"
		});
		else rest.unshift(...types);
		const classes = rest.filter((u) => u.kind === "class");
		const fns = rest.filter((u) => u.kind !== "class");
		if (fns.length) files.push({
			path: `${srcRoot}/lib.${ext}`,
			units: fns,
			kind: "code"
		});
		if (classes.length) files.push({
			path: `${srcRoot}/index.${ext}`,
			units: classes,
			kind: "code"
		});
		else if (files.length) files[files.length - 1].path = `${srcRoot}/index.${ext}`;
		else files.push({
			path: `${srcRoot}/index.${ext}`,
			units: codeUnits,
			kind: "code"
		});
		return files;
	}
	if (settings.mode === "maximum") {
		const files = [];
		const kindFolder = (kind) => {
			if (!settings.folderByKind) return srcRoot;
			if (kind === "type") return `${srcRoot}/types`;
			if (kind === "class") return `${srcRoot}/classes`;
			if (kind === "function") return `${srcRoot}/functions`;
			if (kind === "const") return `${srcRoot}/constants`;
			return srcRoot;
		};
		for (const unit of codeUnits) {
			const folder = settings.includeTypesFile && unit.kind === "type" ? `${srcRoot}/types` : kindFolder(unit.kind);
			const base = toFileName(unit.name || "module", settings.naming);
			files.push({
				path: `${folder}/${base}.${ext}`,
				units: [unit],
				kind: unit.kind === "type" ? "types" : "code"
			});
		}
		return files;
	}
	const groups = /* @__PURE__ */ new Map();
	const push = (key, unit) => {
		const list = groups.get(key) ?? [];
		list.push(unit);
		groups.set(key, list);
	};
	if (settings.includeTypesFile && types.length) {
		if (types.reduce((n, u) => n + countLines(u.text), 0) <= settings.maxFileLines) groups.set("types", types);
		else for (const t of types) push(`types-${concernKey(t.name)}`, t);
	} else for (const t of types) push(concernKey(t.name), t);
	for (const unit of rest) push(unit.kind === "class" ? `class-${concernKey(unit.name)}` : concernKey(unit.name), unit);
	const files = [];
	for (const [key, group] of groups) if (group.reduce((n, u) => n + countLines(u.text), 0) > settings.maxFileLines && group.length > 1) {
		let chunk = [];
		let chunkLines = 0;
		let part = 1;
		const flush = () => {
			if (!chunk.length) return;
			const name = part === 1 ? key : `${key}-${part}`;
			files.push({
				path: `${srcRoot}/${toFileName(name, settings.naming)}.${ext}`,
				units: chunk,
				kind: key.startsWith("types") ? "types" : "code"
			});
			part += 1;
			chunk = [];
			chunkLines = 0;
		};
		for (const unit of group) {
			const ul = countLines(unit.text);
			if (chunk.length && chunkLines + ul > settings.maxFileLines) flush();
			chunk.push(unit);
			chunkLines += ul;
		}
		flush();
	} else files.push({
		path: `${srcRoot}/${toFileName(key, settings.naming)}.${ext}`,
		units: group,
		kind: key.startsWith("types") ? "types" : "code"
	});
	if (files.length === 0) files.push({
		path: `${srcRoot}/index.${ext}`,
		units: codeUnits,
		kind: "code"
	});
	return files;
}
function collectDeclared(files) {
	const map = /* @__PURE__ */ new Map();
	for (const file of files) for (const unit of file.units) for (const name of unit.declared) if (name && !map.has(name)) map.set(name, file.path);
	return map;
}
function injectCrossImports(body, path, declared, language) {
	const needed = /* @__PURE__ */ new Map();
	const selfNames = new Set([...declared.entries()].filter(([, p]) => p === path).map(([n]) => n));
	for (const [name, fromPath] of declared) {
		if (fromPath === path) continue;
		if (selfNames.has(name)) continue;
		if (usedSymbols(body, [name]).length === 0) continue;
		const list = needed.get(fromPath) ?? [];
		list.push(name);
		needed.set(fromPath, list);
	}
	const importLines = [];
	const imports = [];
	for (const [fromPath, names] of needed) {
		imports.push(fromPath);
		if (language === "python") importLines.push(pythonRelativeImport(path, fromPath, names));
		else if (isJsLike(language)) importLines.push(`import { ${names.join(", ")} } from "${relativeImport(path, fromPath)}";`);
		else if (language === "go") continue;
		else importLines.push(fileComment(language, `depends on ${fromPath} (${names.join(", ")})`).trimEnd());
	}
	if (importLines.length === 0) return {
		body,
		imports
	};
	return {
		body: `${importLines.join("\n")}\n\n${body}`,
		imports
	};
}
function makeFile(path, content, language, kind, units, imports) {
	return {
		id: uid("file"),
		path,
		content: content.trimEnd() + "\n",
		language: kind === "readme" ? "markdown" : language,
		originText: units.map((u) => u.text).join("\n\n"),
		originStartLine: units[0]?.startLine,
		originEndLine: units[units.length - 1]?.endLine,
		imports,
		kind
	};
}
function barrelContent(files, language, barrelPath) {
	if (language === "python") {
		const names = files.flatMap((f) => f.units.flatMap((u) => u.declared)).filter(Boolean);
		return `${files.map((f) => {
			const declared = f.units.flatMap((u) => u.declared).filter(Boolean);
			if (!declared.length) return pythonRelativeImport(barrelPath, f.path, ["*"]).replace("import *", "import *");
			return pythonRelativeImport(barrelPath, f.path, declared);
		}).join("\n")}\n\n__all__ = [${names.map((n) => `"${n}"`).join(", ")}]\n`;
	}
	if (isJsLike(language)) return files.map((f) => {
		const declared = f.units.flatMap((u) => u.declared).filter(Boolean);
		const rel = relativeImport(barrelPath, f.path);
		if (declared.length === 0) return `export * from "${rel}";`;
		return `export { ${declared.join(", ")} } from "${rel}";`;
	}).join("\n") + "\n";
	return files.map((f) => fileComment(language, `re-export ${f.path}`)).join("");
}
function readmeContent(source, settings, files) {
	const byKind = files.reduce((acc, f) => {
		acc[f.kind] = (acc[f.kind] ?? 0) + 1;
		return acc;
	}, {});
	const tree = files.map((f) => `- \`${f.path}\`${f.kind !== "code" ? ` — ${f.kind}` : ""}`).join("\n");
	return `# ${source.name.replace(/\.[^.]+$/, "")}

Generated by **Splitter Studio** using the **${settings.mode}** split.

| | |
| --- | --- |
| Source | \`${source.name}\` |
| Language | ${source.language} |
| Files | ${files.length} |
| Naming | ${settings.naming} |

## Layout

${tree}

## Notes

- Original comments were ${settings.preserveComments ? "preserved" : "stripped"}.
- Barrel index: ${settings.generateBarrel ? "yes" : "no"}.
- Kind folders: ${settings.folderByKind ? "yes" : "no"}.
${Object.entries(byKind).map(([k, n]) => `- ${k}: ${n}`).join("\n")}
`;
}
function testStub(file, language, ext, root) {
	const names = file.units.flatMap((u) => u.declared).filter(Boolean);
	if (names.length === 0) return null;
	const target = file.path;
	const testPath = `${root}/tests/${toFileName(file.units[0]?.name ?? "module", "kebab")}.test.${ext}`;
	let content = "";
	if (isJsLike(language)) {
		const rel = relativeImport(testPath, target);
		content = `import { ${names.join(", ")} } from "${rel}";

describe("${file.units[0]?.name}", () => {
${names.map((n) => `  it("exposes ${n}", () => {
    expect(${n}).toBeDefined();
  });`).join("\n\n")}
});
`;
	} else if (language === "python") content = `from ${pythonRelativeImport(testPath, target, names).replace(/^from /, "").replace(" import", " import")}

def test_exports_exist():
${names.map((n) => `    assert ${n} is not None`).join("\n")}
`;
	else return null;
	return {
		id: uid("file"),
		path: testPath,
		content,
		language,
		imports: [target],
		kind: "test"
	};
}
function splitSource(source, settings) {
	const ext = fileExtensionFor(source.language, source.name, source.content);
	const root = source.name.replace(/\.[^.]+$/, "") || "project";
	const units = parseSource(source.content, source.language);
	const header = leadingImports(units);
	const planned = planFiles(units, settings, ext, root);
	const used = /* @__PURE__ */ new Set();
	for (const file of planned) file.path = uniquePath(file.path, used);
	const declared = collectDeclared(planned);
	const files = [];
	for (const file of planned) {
		const body = file.units.map((u) => wrapUnit(u, settings, source.language)).join("\n");
		const originalImports = filterOriginalImports(header, body);
		const injected = injectCrossImports(body, file.path, declared, source.language);
		const content = `${fileComment(source.language, `Split from ${source.name} · ${settings.mode} · ${file.units.map((u) => u.name).join(", ")}`)}${originalImports ? `${originalImports}\n` : ""}${injected.body}`;
		files.push(makeFile(file.path, content, source.language, file.kind, file.units, injected.imports));
	}
	if (settings.generateBarrel && files.some((f) => f.kind === "code" || f.kind === "types")) {
		const barrelPath = uniquePath(`${root}/src/index.${source.language === "python" ? "py" : ext}`, used);
		const codeFiles = planned.filter((f) => f.kind === "code" || f.kind === "types");
		files.push({
			id: uid("file"),
			path: barrelPath,
			content: barrelContent(codeFiles, source.language, barrelPath),
			language: source.language,
			imports: codeFiles.map((f) => f.path),
			kind: "barrel"
		});
	}
	if (settings.generateTests) for (const file of planned) {
		const test = testStub(file, source.language, ext === "tsx" ? "ts" : ext, root);
		if (test) {
			test.path = uniquePath(test.path, used);
			files.push(test);
		}
	}
	if (settings.generateReadme) {
		const readmePath = uniquePath(`${root}/README.md`, used);
		const previewFiles = [...files];
		files.unshift({
			id: uid("file"),
			path: readmePath,
			content: readmeContent(source, settings, previewFiles),
			language: "markdown",
			imports: [],
			kind: "readme"
		});
	}
	return files;
}
function rebuildProject(source, settings) {
	const files = splitSource(source, settings);
	return {
		files,
		analysis: analyzeProject(files, source, settings)
	};
}
var initialSource = sourceFromSample("typescript");
var initialProject = rebuildProject(initialSource, DEFAULT_SETTINGS);
function applyTheme(theme) {
	if (typeof document === "undefined") return;
	document.documentElement.setAttribute("data-theme", theme);
}
async function writeClipboard(text) {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		try {
			const el = document.createElement("textarea");
			el.value = text;
			el.setAttribute("readonly", "");
			el.style.position = "fixed";
			el.style.left = "-9999px";
			document.body.appendChild(el);
			el.select();
			const ok = document.execCommand("copy");
			el.remove();
			return ok;
		} catch {
			return false;
		}
	}
}
var useStudioStore = create()(persist((set, get) => ({
	theme: "dark",
	source: initialSource,
	settings: DEFAULT_SETTINGS,
	files: initialProject.files,
	analysis: initialProject.analysis,
	selectedFileId: initialProject.files.find((f) => f.kind === "code")?.id ?? initialProject.files[0]?.id ?? null,
	checkedIds: [],
	expandedPaths: Array.from(new Set(initialProject.files.map((f) => f.path.split("/").slice(0, -1).join("/")).filter(Boolean))),
	mobileTab: "source",
	showDiff: false,
	refactorBusy: false,
	refactorError: null,
	suggestions: [],
	setTheme: (theme) => {
		applyTheme(theme);
		set({ theme });
	},
	cycleTheme: () => {
		const order = [
			"dark",
			"light",
			"brand"
		];
		const next = order[(order.indexOf(get().theme) + 1) % order.length];
		get().setTheme(next);
	},
	loadSample: (id) => {
		get().loadSource(sourceFromSample(id).name, sourceFromSample(id).content);
	},
	loadSource: (name, content) => {
		if (byteSize(content) > 5e5) {
			toast.error("File is larger than 500 KB.");
			return;
		}
		const source = sourceFromFile(name, content);
		const { files, analysis } = rebuildProject(source, get().settings);
		const expanded = Array.from(new Set(files.map((f) => f.path.split("/").slice(0, -1).join("/")).filter(Boolean)));
		set({
			source,
			files,
			analysis,
			selectedFileId: files.find((f) => f.kind === "code")?.id ?? files[0]?.id ?? null,
			checkedIds: [],
			expandedPaths: expanded,
			suggestions: [],
			refactorError: null,
			showDiff: false
		});
		toast.success(`Split ${name} into ${files.length} files.`);
	},
	setSourceContent: (content) => {
		const current = get().source;
		set({ source: {
			...current,
			content
		} });
	},
	updateSettings: (patch) => {
		const settings = {
			...get().settings,
			...patch
		};
		const { files, analysis } = rebuildProject(get().source, settings);
		set({
			settings,
			files,
			analysis,
			selectedFileId: files.find((f) => f.path === get().files.find((x) => x.id === get().selectedFileId)?.path)?.id ?? files.find((f) => f.kind === "code")?.id ?? files[0]?.id ?? null,
			expandedPaths: Array.from(new Set(files.map((f) => f.path.split("/").slice(0, -1).join("/")).filter(Boolean)))
		});
	},
	resplit: () => {
		const { source, settings } = get();
		const { files, analysis } = rebuildProject(source, settings);
		set({
			files,
			analysis,
			selectedFileId: files.find((f) => f.kind === "code")?.id ?? files[0]?.id ?? null,
			suggestions: []
		});
		toast.success(`Re-split into ${files.length} files.`);
	},
	selectFile: (id, opts) => {
		set({
			selectedFileId: id,
			showDiff: false,
			...opts?.openPreview ? { mobileTab: "preview" } : {}
		});
	},
	toggleChecked: (id) => {
		set({ checkedIds: get().checkedIds.includes(id) ? get().checkedIds.filter((x) => x !== id) : [...get().checkedIds, id] });
	},
	setChecked: (ids) => set({ checkedIds: ids }),
	toggleExpanded: (path) => {
		set({ expandedPaths: get().expandedPaths.includes(path) ? get().expandedPaths.filter((p) => p !== path) : [...get().expandedPaths, path] });
	},
	setMobileTab: (mobileTab) => set({ mobileTab }),
	setShowDiff: (showDiff) => set({ showDiff }),
	updateFileContent: (id, content) => {
		const files = get().files.map((f) => f.id === id ? {
			...f,
			content
		} : f);
		const { analysis } = { analysis: get().analysis };
		set({
			files,
			analysis: {
				...analysis,
				totalLines: files.reduce((n, f) => n + countLines(f.content), 0)
			}
		});
	},
	renameFile: (id, nextName) => {
		const name = nextName.trim();
		if (!name || name.includes("/")) {
			toast.error("Enter a file name without slashes.");
			return;
		}
		const files = get().files.map((f) => f.id === id ? {
			...f,
			path: renamePath(f.path, name)
		} : f);
		if (new Set(files.map((f) => f.path)).size !== files.length) {
			toast.error("A file with that name already exists.");
			return;
		}
		set({ files });
		toast.success("File renamed.");
	},
	moveFile: (id, folder) => {
		const files = get().files.map((f) => f.id === id ? {
			...f,
			path: movePath(f.path, folder)
		} : f);
		if (new Set(files.map((f) => f.path)).size !== files.length) {
			toast.error("A file already exists in that folder.");
			return;
		}
		set({
			files,
			expandedPaths: folder && !get().expandedPaths.includes(folder) ? [...get().expandedPaths, folder] : get().expandedPaths
		});
		toast.success("File moved.");
	},
	formatSelected: () => {
		const { selectedFileId, files } = get();
		const file = files.find((f) => f.id === selectedFileId);
		if (!file) return;
		const content = formatCode(file.content, file.path);
		get().updateFileContent(file.id, content);
		toast.success("Formatted file.");
	},
	copySelected: async () => {
		const file = get().files.find((f) => f.id === get().selectedFileId);
		if (!file) {
			toast.error("Select a file first.");
			return;
		}
		const ok = await writeClipboard(file.content);
		toast[ok ? "success" : "error"](ok ? `Copied ${file.path}` : "Copy failed.");
	},
	copyProject: async () => {
		const ok = await writeClipboard(projectAsText(get().files));
		toast[ok ? "success" : "error"](ok ? "Copied entire project." : "Copy failed.");
	},
	downloadSelectedFile: () => {
		const file = get().files.find((f) => f.id === get().selectedFileId);
		if (!file) {
			toast.error("Select a file first.");
			return;
		}
		downloadText(file.content, file.path.split("/").pop() ?? "file.txt");
		toast.success(`Downloading ${file.path.split("/").pop()}`);
	},
	downloadSelectedFiles: async () => {
		const ids = get().checkedIds;
		const files = get().files.filter((f) => ids.includes(f.id));
		if (files.length === 0) {
			toast.error("Check one or more files in Structure first.");
			return;
		}
		const JSZip = (await import("../_libs/jszip+[...].mjs").then((n) => /* @__PURE__ */ __toESM(n.t()))).default;
		const zip = new JSZip();
		for (const file of files) zip.file(file.path, file.content);
		const blob = await zip.generateAsync({ type: "blob" });
		const { downloadBlob } = await import("./utils-DT8Kvlhv.mjs");
		downloadBlob(blob, "selected-files.zip");
		toast.success(`Downloading ${files.length} files.`);
	},
	downloadZip: async () => {
		const JSZip = (await import("../_libs/jszip+[...].mjs").then((n) => /* @__PURE__ */ __toESM(n.t()))).default;
		const zip = new JSZip();
		for (const file of get().files) zip.file(file.path, file.content);
		const blob = await zip.generateAsync({ type: "blob" });
		const { downloadBlob } = await import("./utils-DT8Kvlhv.mjs");
		downloadBlob(blob, `${get().source.name.replace(/\.[^.]+$/, "") || "project"}-split.zip`);
		toast.success("Downloading project ZIP.");
	},
	runAi: async (action) => {
		const file = get().files.find((f) => f.id === get().selectedFileId);
		if (!file) {
			toast.error("Select a file in Preview first.");
			return;
		}
		set({
			refactorBusy: true,
			refactorError: null
		});
		try {
			const result = await runRefactor({ data: {
				action,
				filePath: file.path,
				content: file.content,
				language: file.language
			} });
			if (!result.ok) {
				set({
					refactorBusy: false,
					refactorError: result.error
				});
				toast.error(result.error);
				return;
			}
			set({
				refactorBusy: false,
				suggestions: [{
					id: uid("ref"),
					action,
					fileId: file.id,
					filePath: file.path,
					title: result.title,
					summary: `Updated ${file.path} (${countLines(result.text)} lines).`,
					content: result.text.endsWith("\n") ? result.text : `${result.text}\n`,
					status: "ready"
				}, ...get().suggestions].slice(0, 8)
			});
			toast.success(`${result.title} ready to apply.`);
		} catch (error) {
			const message = error instanceof Error ? error.message : "Refactor failed.";
			set({
				refactorBusy: false,
				refactorError: message
			});
			toast.error(message);
		}
	},
	applySuggestion: (id) => {
		const suggestion = get().suggestions.find((s) => s.id === id);
		if (!suggestion) return;
		get().updateFileContent(suggestion.fileId, suggestion.content);
		set({
			suggestions: get().suggestions.map((s) => s.id === id ? {
				...s,
				status: "applied"
			} : s),
			selectedFileId: suggestion.fileId
		});
		toast.success(`Applied ${suggestion.title}.`);
	},
	discardSuggestion: (id) => {
		set({ suggestions: get().suggestions.map((s) => s.id === id ? {
			...s,
			status: "discarded"
		} : s) });
	}
}), {
	name: "splitter-studio-v1",
	partialize: (state) => ({
		theme: state.theme,
		settings: state.settings
	})
}));
var Accordion = Root2;
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		className: cn("border-b border-border", className),
		...props
	});
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
		className: "flex",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
			className: cn("flex min-h-11 flex-1 items-center justify-between gap-2 py-2 text-left text-sm font-medium transition-all hover:text-brand [&[data-state=open]>svg]:rotate-180", className),
			...props,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-foreground-muted transition-transform duration-200" })]
		})
	});
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("pt-0 pb-3", className),
			children
		})
	});
}
var badgeVariants = cva("inline-flex items-center rounded-md border px-1.5 py-0.5 text-xs font-medium tabular-nums", {
	variants: { variant: {
		default: "border-transparent bg-surface text-foreground",
		brand: "border-transparent bg-brand text-primary-foreground",
		outline: "border-border text-foreground-muted",
		success: "border-transparent bg-success/15 text-success",
		warning: "border-transparent bg-warning/15 text-warning",
		destructive: "border-transparent bg-destructive/15 text-destructive"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96] touch-manipulation", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			secondary: "bg-surface text-foreground hover:bg-background-muted",
			outline: "border border-border bg-transparent hover:bg-background-muted",
			ghost: "hover:bg-background-muted",
			destructive: "bg-destructive text-primary-foreground hover:opacity-90",
			brand: "bg-brand text-primary-foreground hover:opacity-90"
		},
		size: {
			default: "h-9 px-3",
			sm: "h-8 px-2.5 text-xs",
			lg: "h-11 px-4",
			icon: "size-9",
			"icon-lg": "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var ACTION_IDS = Object.keys(REFACTOR_ACTIONS);
function MetricCard({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-background-muted p-3 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-foreground-muted uppercase",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-mono text-xl font-semibold tabular-nums",
				children: value
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-foreground-muted",
				children: hint
			}) : null
		]
	});
}
function AnalysisPanel() {
	const analysis = useStudioStore((s) => s.analysis);
	const settings = useStudioStore((s) => s.settings);
	const suggestions = useStudioStore((s) => s.suggestions);
	const refactorBusy = useStudioStore((s) => s.refactorBusy);
	const refactorError = useStudioStore((s) => s.refactorError);
	const runAi = useStudioStore((s) => s.runAi);
	const applySuggestion = useStudioStore((s) => s.applySuggestion);
	const discardSuggestion = useStudioStore((s) => s.discardSuggestion);
	const selectFile = useStudioStore((s) => s.selectFile);
	const files = useStudioStore((s) => s.files);
	const chartData = analysis.fileSizes.slice(0, 8).map((f) => ({
		name: f.path.split("/").pop() ?? f.path,
		lines: f.lines
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "panel-scroll h-full min-h-0 min-w-0 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						label: "Files",
						value: formatNumber(analysis.files),
						hint: `${analysis.folders} folders`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						label: "Lines",
						value: formatNumber(analysis.totalLines),
						hint: `${formatBytes(analysis.totalBytes)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						label: "Avg / file",
						value: formatNumber(analysis.avgLinesPerFile),
						hint: `Mode ${settings.mode}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						label: "Complexity",
						value: formatNumber(analysis.complexityScore),
						hint: analysis.largestFile ? `Largest ${analysis.largestFile.path.split("/").pop()}` : void 0
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 rounded-xl border border-border-muted bg-background-muted p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs font-medium tracking-wide text-foreground-muted uppercase",
						children: "Lines by file"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-48 min-w-0 overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full min-w-72",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: chartData,
									margin: {
										top: 4,
										right: 8,
										left: 0,
										bottom: 24
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "name",
											tick: { fontSize: 10 },
											interval: 0,
											angle: -25,
											textAnchor: "end"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											tick: { fontSize: 10 },
											width: 32
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
											background: "var(--color-background-muted)",
											border: "1px solid var(--color-border)",
											borderRadius: 8,
											fontSize: 12
										} }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "lines",
											fill: "var(--color-brand)",
											radius: [
												4,
												4,
												0,
												0
											]
										})
									]
								})
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 rounded-xl border border-border-muted bg-background-muted p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-xs font-medium tracking-wide text-foreground-muted uppercase",
							children: "Languages"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-col gap-2",
							children: analysis.languageBreakdown.map((slice) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: LANGUAGE_LABEL[slice.language] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs text-foreground-muted tabular-nums",
									children: [
										slice.files,
										" files · ",
										slice.lines,
										" lines"
									]
								})]
							}, slice.language))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs font-medium tracking-wide text-foreground-muted uppercase",
							children: "Dependencies"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 max-h-28 overflow-x-auto overflow-y-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex min-w-max flex-col gap-1 font-mono text-xs text-foreground-muted",
								children: analysis.dependencies.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "No cross-file imports detected." }) : analysis.dependencies.slice(0, 24).map((dep, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									dep.from.split("/").pop(),
									" → ",
									dep.to.split("/").pop()
								] }, `${dep.from}-${dep.to}-${i}`))
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border-muted p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs font-medium tracking-wide text-foreground-muted uppercase",
						children: "Warnings"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-2",
						children: analysis.warnings.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2 text-sm text-foreground-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-success" }), "No structural warnings."]
						}) : analysis.warnings.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: cn("mt-0.5 size-4 shrink-0", w.severity === "error" ? "text-destructive" : "text-warning") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "min-w-0 text-left",
								onClick: () => {
									const file = files.find((f) => f.path === w.path);
									if (file) selectFile(file.id, { openPreview: true });
								},
								children: w.message
							})]
						}, w.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border-muted p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs font-medium tracking-wide text-foreground-muted uppercase",
						children: "Suggestions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-2",
						children: analysis.suggestions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2 text-sm text-foreground-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-4 text-info" }), "Split looks healthy."]
						}) : analysis.suggestions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: s.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-foreground-muted",
								children: s.detail
							})]
						}, s.id))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-xl border border-border p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "size-4 text-brand" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold",
								children: "AI refactoring"
							}),
							refactorBusy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "size-4 animate-spin text-brand",
								"aria-label": "Running"
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs text-foreground-muted",
						children: "Runs on the file open in Preview. Review the result, then apply or discard."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
						children: ACTION_IDS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							size: "lg",
							className: "w-full justify-start md:h-9",
							disabled: refactorBusy,
							onClick: () => void runAi(id),
							children: REFACTOR_ACTIONS[id].title
						}, id))
					}),
					refactorError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-destructive",
						role: "alert",
						children: refactorError
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-col gap-2",
						children: suggestions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							type: "single",
							collapsible: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: item.id,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex min-w-0 items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: item.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: item.status === "applied" ? "success" : item.status === "discarded" ? "outline" : "brand",
										children: item.status
									})]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionContent, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-2 text-xs text-foreground-muted",
										children: item.summary
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("pre", {
										className: "mb-3 max-h-40 overflow-auto rounded-md bg-background-muted p-2 font-mono text-xs",
										children: [item.content.slice(0, 1200), item.content.length > 1200 ? "\n…" : ""]
									}),
									item.status === "ready" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-2 sm:flex-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											className: "w-full sm:w-auto",
											onClick: () => applySuggestion(item.id),
											children: "Apply to file"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											variant: "outline",
											className: "w-full sm:w-auto",
											onClick: () => discardSuggestion(item.id),
											children: "Discard"
										})]
									}) : null
								] })]
							})
						}, item.id))
					})
				]
			})
		]
	});
}
function Drawer$1({ shouldScaleBackground = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Root, {
		shouldScaleBackground,
		...props
	});
}
Drawer.Trigger;
var DrawerClose = Drawer.Close;
var DrawerPortal = Drawer.Portal;
function DrawerOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Overlay, {
		className: cn("fixed inset-0 z-50 bg-foreground/40", className),
		...props
	});
}
function DrawerContent({ className, children, side = "bottom", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DrawerPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drawer.Content, {
		className: cn("fixed z-50 flex flex-col bg-background text-foreground outline-none", side === "bottom" && "inset-x-0 bottom-0 max-h-[85dvh] rounded-t-2xl border-t border-border pb-[env(safe-area-inset-bottom)]", side === "right" && "inset-y-0 right-0 h-full w-[min(22rem,88vw)] border-l border-border pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]", className),
		...props,
		children: [side === "bottom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-2 h-1 w-10 shrink-0 rounded-full bg-border",
			"aria-hidden": true
		}) : null, children]
	})] });
}
function DrawerHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("grid gap-1 px-4 pt-3 pb-2", className),
		...props
	});
}
function DrawerTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Title, {
		className: cn("text-base font-semibold", className),
		...props
	});
}
function DrawerDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Description, {
		className: cn("text-sm text-foreground-muted", className),
		...props
	});
}
var DropdownMenu = Root2$1;
var DropdownMenuTrigger = Trigger;
function DropdownMenuContent({ className, sideOffset = 6, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
		sideOffset,
		collisionPadding: 12,
		className: cn("z-50 min-w-44 overflow-hidden rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-[var(--shadow-border)]", "max-h-[min(24rem,70dvh)] overflow-y-auto", className),
		...props
	}) });
}
function DropdownMenuItem({ className, inset, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
		className: cn("relative flex min-h-11 cursor-pointer items-center gap-2 rounded-md px-2.5 text-sm outline-none select-none md:min-h-8", "focus:bg-background-muted data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className),
		...props
	});
}
function DropdownMenuSeparator({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
		className: cn("-mx-1 my-1 h-px bg-border", className),
		...props
	});
}
function ExportMenu() {
	const copySelected = useStudioStore((s) => s.copySelected);
	const copyProject = useStudioStore((s) => s.copyProject);
	const downloadSelectedFile = useStudioStore((s) => s.downloadSelectedFile);
	const downloadSelectedFiles = useStudioStore((s) => s.downloadSelectedFiles);
	const downloadZip = useStudioStore((s) => s.downloadZip);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			type: "button",
			variant: "outline",
			size: "sm",
			className: "hidden md:inline-flex",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Export"]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onSelect: () => void copySelected(),
				children: "Copy file"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onSelect: downloadSelectedFile,
				children: "Download file"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onSelect: () => void downloadSelectedFiles(),
				children: "Download selected"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onSelect: () => void downloadZip(),
				children: "Download ZIP"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onSelect: () => void copyProject(),
				children: "Copy entire project"
			})
		]
	})] });
}
function MobileExportBar() {
	const copySelected = useStudioStore((s) => s.copySelected);
	const copyProject = useStudioStore((s) => s.copyProject);
	const downloadSelectedFile = useStudioStore((s) => s.downloadSelectedFile);
	const downloadSelectedFiles = useStudioStore((s) => s.downloadSelectedFiles);
	const downloadZip = useStudioStore((s) => s.downloadZip);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex shrink-0 items-center gap-1 overflow-x-auto border-t border-border bg-background px-2 py-1.5 safe-pb",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: "min-h-11 shrink-0",
				onClick: () => void copySelected(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), "Copy"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: "min-h-11 shrink-0",
				onClick: downloadSelectedFile,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "File"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: "min-h-11 shrink-0",
				onClick: () => void downloadSelectedFiles(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Files, { className: "size-4" }), "Selected"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: "min-h-11 shrink-0",
				onClick: () => void downloadZip(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderArchive, { className: "size-4" }), "ZIP"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: "min-h-11 shrink-0",
				onClick: () => void copyProject(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), "Project"]
			})
		]
	});
}
function StudioLogo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-7", className),
		"aria-hidden": "true",
		focusable: "false",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "5",
				width: "11.5",
				height: "22",
				rx: "2.5",
				className: "fill-surface"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "17.5",
				y: "5",
				width: "11.5",
				height: "22",
				rx: "2.5",
				className: "fill-surface"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M15.2 4.5v23",
				className: "stroke-brand",
				strokeWidth: "2.2",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M6.5 11h5M6.5 16h4M20.5 11h5M20.5 16h3.5",
				className: "stroke-foreground-muted",
				strokeWidth: "1.4",
				strokeLinecap: "round"
			})
		]
	});
}
var LABEL = {
	dark: "Dark theme",
	light: "Light theme",
	brand: "Brand theme"
};
function ThemeToggle({ size = "icon" }) {
	const theme = useStudioStore((s) => s.theme);
	const cycleTheme = useStudioStore((s) => s.cycleTheme);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type: "button",
		variant: "ghost",
		size,
		onClick: cycleTheme,
		"aria-label": `${LABEL[theme]}. Switch theme`,
		title: LABEL[theme],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative inline-flex size-4 items-center justify-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: `absolute size-4 transition-[opacity,transform,filter] duration-200 ${theme === "light" ? "scale-100 opacity-100 blur-0" : "scale-[0.25] opacity-0 blur-[4px]"}` }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: `absolute size-4 transition-[opacity,transform,filter] duration-200 ${theme === "dark" ? "scale-100 opacity-100 blur-0" : "scale-[0.25] opacity-0 blur-[4px]"}` }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: `absolute size-4 transition-[opacity,transform,filter] duration-200 ${theme === "brand" ? "scale-100 opacity-100 blur-0" : "scale-[0.25] opacity-0 blur-[4px]"}` })
			]
		})
	});
}
function DesktopHeader() {
	const source = useStudioStore((s) => s.source);
	const analysis = useStudioStore((s) => s.analysis);
	const settings = useStudioStore((s) => s.settings);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex h-12 shrink-0 items-center gap-3 border-b border-border bg-background px-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioLogo, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "truncate text-sm font-semibold tracking-tight",
					children: "Splitter Studio"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hidden truncate text-xs text-foreground-muted lg:block",
					children: "AI Source Code Splitter"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ml-auto hidden items-center gap-3 font-mono text-xs text-foreground-muted tabular-nums md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: LANGUAGE_LABEL[source.language] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [formatNumber(analysis.files), " files"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [formatNumber(analysis.totalLines), " lines"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "capitalize",
						children: settings.mode
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportMenu, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})
		]
	});
}
function MobileHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const source = useStudioStore((s) => s.source);
	const analysis = useStudioStore((s) => s.analysis);
	const loadSample = useStudioStore((s) => s.loadSample);
	const copyProject = useStudioStore((s) => s.copyProject);
	const downloadZip = useStudioStore((s) => s.downloadZip);
	const cycleTheme = useStudioStore((s) => s.cycleTheme);
	const theme = useStudioStore((s) => s.theme);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex h-12 shrink-0 items-center gap-2 border-b border-border bg-background safe-pt px-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioLogo, { className: "size-6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "truncate text-sm font-semibold",
					children: "Splitter Studio"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "truncate text-xs text-foreground-muted",
					children: [
						source.name,
						" · ",
						formatNumber(analysis.files),
						" files"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, { size: "icon-lg" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				size: "icon-lg",
				"aria-label": "Open menu",
				onClick: () => setOpen(true),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer$1, {
				open,
				onOpenChange: setOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DrawerContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DrawerHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerTitle, { children: "Studio menu" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerDescription, { children: "Global actions and samples" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col gap-1 px-3 pb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerClose, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								size: "lg",
								className: "w-full justify-start",
								onClick: () => loadSample("typescript"),
								children: "Load TypeScript sample"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerClose, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								size: "lg",
								className: "w-full justify-start",
								onClick: () => loadSample("python"),
								children: "Load Python sample"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerClose, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								size: "lg",
								className: "w-full justify-start",
								onClick: () => loadSample("javascript"),
								children: "Load JavaScript sample"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerClose, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								size: "lg",
								className: "w-full justify-start",
								onClick: () => void downloadZip(),
								children: "Download ZIP"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerClose, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								size: "lg",
								className: "w-full justify-start",
								onClick: () => void copyProject(),
								children: "Copy entire project"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerClose, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "ghost",
								size: "lg",
								className: "w-full justify-start",
								onClick: cycleTheme,
								children: ["Theme: ", theme]
							})
						})
					]
				})] })
			})
		]
	});
}
function Checkbox({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
		"data-slot": "checkbox",
		className: cn("peer size-5 shrink-0 rounded-sm border border-border bg-background outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=checked]:bg-brand data-[state=checked]:text-primary-foreground", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
			className: "flex items-center justify-center text-current",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
		})
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-foreground/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 grid w-[min(calc(100vw-1.5rem),28rem)] max-h-[min(90dvh,36rem)] -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto rounded-xl border border-border bg-background p-5 shadow-[var(--shadow-border)]", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-3 right-3 rounded-md p-2 text-foreground-muted hover:bg-background-muted hover:text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5", className),
		...props
	});
}
function DialogFooter({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("text-base font-semibold", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm text-foreground-muted", className),
		...props
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		"data-slot": "input",
		className: cn("flex h-11 w-full min-w-0 rounded-md border border-input bg-background-muted px-3 text-sm text-foreground shadow-none transition-[border-color,box-shadow] outline-none placeholder:text-foreground-muted md:h-9", "focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		"data-slot": "label",
		className: cn("text-xs font-medium text-foreground-muted", className),
		...props
	});
}
var Select = Select$1;
var SelectValue = SelectValue$1;
function SelectTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
		className: cn("flex h-11 w-full items-center justify-between gap-2 rounded-md border border-input bg-background-muted px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 md:h-9", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 opacity-60" })
		})]
	});
}
function SelectContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent$1, {
		position: "popper",
		collisionPadding: 12,
		className: cn("z-50 max-h-72 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-[var(--shadow-border)]", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: "p-1",
			children
		})
	}) });
}
function SelectItem({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
		className: cn("relative flex min-h-11 cursor-pointer items-center rounded-md py-1.5 pr-8 pl-2 text-sm outline-none select-none focus:bg-background-muted data-[disabled]:opacity-50 md:min-h-8", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute right-2 flex size-4 items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
	});
}
function FileActions({ file, onRename, onMove }) {
	const selectFile = useStudioStore((s) => s.selectFile);
	const isDesktop = useIsDesktop();
	const [open, setOpen] = (0, import_react.useState)(false);
	const items = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "flex min-h-11 w-full items-center rounded-md px-3 text-sm hover:bg-background-muted md:min-h-8",
			onClick: () => {
				selectFile(file.id, { openPreview: true });
				setOpen(false);
			},
			children: "Open in Preview"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "flex min-h-11 w-full items-center rounded-md px-3 text-sm hover:bg-background-muted md:min-h-8",
			onClick: () => {
				onRename();
				setOpen(false);
			},
			children: "Rename"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "flex min-h-11 w-full items-center rounded-md px-3 text-sm hover:bg-background-muted md:min-h-8",
			onClick: () => {
				onMove();
				setOpen(false);
			},
			children: "Move"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "flex min-h-11 w-full items-center rounded-md px-3 text-sm hover:bg-background-muted md:min-h-8",
			onClick: () => {
				downloadText(file.content, file.path.split("/").pop() ?? "file.txt");
				toast.success("Downloading file.");
				setOpen(false);
			},
			children: "Download"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "flex min-h-11 w-full items-center rounded-md px-3 text-sm hover:bg-background-muted md:min-h-8",
			onClick: async () => {
				try {
					await navigator.clipboard.writeText(file.path);
					toast.success("Copied path.");
				} catch {
					toast.error("Copy failed.");
				}
				setOpen(false);
			},
			children: "Copy path"
		})
	] });
	if (!isDesktop) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type: "button",
		variant: "ghost",
		size: "icon-lg",
		className: "shrink-0",
		"aria-label": `Actions for ${file.path}`,
		onClick: (e) => {
			e.stopPropagation();
			setOpen(true);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer$1, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DrawerContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DrawerHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerTitle, {
			className: "truncate",
			children: file.path.split("/").pop()
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerDescription, {
			className: "truncate",
			children: file.path
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col px-2 pb-4",
			children: items
		})] })
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				size: "icon",
				className: "shrink-0",
				"aria-label": `Actions for ${file.path}`,
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
			align: "end",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					onSelect: () => selectFile(file.id, { openPreview: true }),
					children: "Open in Preview"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					onSelect: onRename,
					children: "Rename"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					onSelect: onMove,
					children: "Move"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					onSelect: () => {
						downloadText(file.content, file.path.split("/").pop() ?? "file.txt");
						toast.success("Downloading file.");
					},
					children: "Download"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					onSelect: () => {
						navigator.clipboard.writeText(file.path).then(() => toast.success("Copied path."), () => toast.error("Copy failed."));
					},
					children: "Copy path"
				})
			]
		})]
	});
}
function TreeRow({ node, depth, filesById, onRename, onMove }) {
	const selectedFileId = useStudioStore((s) => s.selectedFileId);
	const expandedPaths = useStudioStore((s) => s.expandedPaths);
	const checkedIds = useStudioStore((s) => s.checkedIds);
	const selectFile = useStudioStore((s) => s.selectFile);
	const toggleExpanded = useStudioStore((s) => s.toggleExpanded);
	const toggleChecked = useStudioStore((s) => s.toggleChecked);
	const isDesktop = useIsDesktop();
	if (node.type === "folder") {
		const open = expandedPaths.includes(node.path);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "flex min-h-11 w-full min-w-0 items-center gap-1.5 rounded-md px-1.5 text-left hover:bg-background-muted md:min-h-8",
			style: { paddingLeft: 8 + depth * 14 },
			onClick: () => toggleExpanded(node.path),
			"aria-expanded": open,
			children: [
				open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 shrink-0" }),
				open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-4 shrink-0 text-brand" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { className: "size-4 shrink-0 text-brand-muted" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "min-w-0 truncate text-sm",
					children: node.name
				})
			]
		}), open ? node.children?.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreeRow, {
			node: child,
			depth: depth + 1,
			filesById,
			onRename,
			onMove
		}, child.id)) : null] });
	}
	const file = filesById.get(node.id);
	if (!file) return null;
	const active = selectedFileId === file.id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("group flex min-h-11 min-w-0 items-center gap-1 rounded-md pr-1 md:min-h-8", active ? "bg-brand/15" : "hover:bg-background-muted"),
		style: { paddingLeft: 8 + depth * 14 },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
				checked: checkedIds.includes(file.id),
				onCheckedChange: () => toggleChecked(file.id),
				"aria-label": `Select ${file.path}`,
				className: "shrink-0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "flex min-h-11 min-w-0 flex-1 items-center gap-1.5 text-left md:min-h-8",
				onClick: () => selectFile(file.id, { openPreview: !isDesktop }),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCode, { className: "size-4 shrink-0 text-foreground-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "min-w-0 flex-1 truncate font-mono text-xs md:text-sm",
					title: file.path,
					children: node.name
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileActions, {
				file,
				onRename: () => onRename(file),
				onMove: () => onMove(file)
			})
		]
	});
}
function FileTreePanel() {
	const files = useStudioStore((s) => s.files);
	const checkedIds = useStudioStore((s) => s.checkedIds);
	const setChecked = useStudioStore((s) => s.setChecked);
	const renameFile = useStudioStore((s) => s.renameFile);
	const moveFile = useStudioStore((s) => s.moveFile);
	const tree = (0, import_react.useMemo)(() => filesToTree(files), [files]);
	const filesById = (0, import_react.useMemo)(() => new Map(files.map((f) => [f.id, f])), [files]);
	const folders = (0, import_react.useMemo)(() => listFolders(files), [files]);
	const [rename, setRename] = (0, import_react.useState)(null);
	const [move, setMove] = (0, import_react.useState)(null);
	const [nextName, setNextName] = (0, import_react.useState)("");
	const [nextFolder, setNextFolder] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 min-w-0 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2 border-b border-border px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-foreground-muted tabular-nums",
					children: [files.length, " files"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					onClick: () => setChecked(checkedIds.length === files.length ? [] : files.map((f) => f.id)),
					children: checkedIds.length === files.length ? "Clear" : "Select all"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "panel-scroll flex-1 px-1 py-1",
				children: tree.map((node) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreeRow, {
					node,
					depth: 0,
					filesById,
					onRename: (file) => {
						setRename(file);
						setNextName(file.path.split("/").pop() ?? "");
					},
					onMove: (file) => {
						setMove(file);
						setNextFolder(file.path.split("/").slice(0, -1).join("/"));
					}
				}, node.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(rename),
				onOpenChange: (open) => !open && setRename(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Rename file" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Update the file name. Paths stay inside the current folder." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "rename-file",
							children: "File name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "rename-file",
							value: nextName,
							onChange: (e) => setNextName(e.target.value),
							autoFocus: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						onClick: () => setRename(null),
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						onClick: () => {
							if (rename) renameFile(rename.id, nextName);
							setRename(null);
						},
						children: "Rename"
					})] })
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(move),
				onOpenChange: (open) => !open && setMove(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Move file" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Choose a destination folder." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: nextFolder,
						onValueChange: setNextFolder,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							"aria-label": "Destination folder",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select folder" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: folders.map((folder) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: folder,
							children: folder
						}, folder)) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						onClick: () => setMove(null),
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						onClick: () => {
							if (move) moveFile(move.id, nextFolder);
							setMove(null);
						},
						children: "Move"
					})] })
				] })
			})
		]
	});
}
function editorTheme(theme) {
	return theme === "light" ? "vs" : "vs-dark";
}
function MonacoPane({ value, path, language, theme, onChange, onMountRef }) {
	const [Editor, setEditor] = (0, import_react.useState)(null);
	const [failed, setFailed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let alive = true;
		import("../_libs/monaco-editor__react.mjs").then((n) => n.t).then((mod) => {
			mod.loader.config({ paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs" } });
			if (alive) setEditor(() => mod.default);
		}).catch(() => {
			if (alive) setFailed(true);
		});
		const t = window.setTimeout(() => {
			if (alive && !Editor) setFailed(true);
		}, 8e3);
		return () => {
			alive = false;
			window.clearTimeout(t);
		};
	}, [Editor]);
	if (failed && !Editor) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		value,
		onChange: (e) => onChange(e.target.value),
		spellCheck: false,
		"aria-label": `Code editor for ${path}`,
		className: "h-full w-full min-w-0 resize-none bg-background-muted p-3 font-mono text-sm text-foreground outline-none"
	});
	if (!Editor) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-full w-full bg-background-muted",
		"aria-hidden": true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Editor, {
		path,
		theme: editorTheme(theme),
		language,
		value,
		onChange: (next) => onChange(next ?? ""),
		loading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-background-muted" }),
		onMount: (editor) => onMountRef(editor),
		options: {
			minimap: { enabled: false },
			fontSize: 13,
			fontFamily: "IBM Plex Mono, ui-monospace, SF Mono, Menlo, Consolas, monospace",
			wordWrap: "off",
			scrollBeyondLastLine: false,
			automaticLayout: true,
			padding: {
				top: 12,
				bottom: 12
			},
			tabSize: 2,
			lineNumbersMinChars: 3,
			overviewRulerLanes: 0,
			folding: true,
			glyphMargin: false,
			renderLineHighlight: "line",
			scrollbar: {
				verticalScrollbarSize: 8,
				horizontalScrollbarSize: 8,
				alwaysConsumeMouseWheel: false
			},
			ariaLabel: `Code editor for ${path}`
		}
	});
}
function DiffView({ original, current }) {
	const lines = unifiedDiff(original, current);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "panel-scroll h-full min-w-0 bg-background-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "min-w-max p-3 font-mono text-xs leading-5",
			children: lines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("px-2 whitespace-pre", line.type === "add" && "bg-success/15 text-success", line.type === "del" && "bg-destructive/15 text-destructive", line.type === "same" && "text-foreground-muted"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-block w-4",
					children: line.type === "add" ? "+" : line.type === "del" ? "-" : " "
				}), line.text || " "]
			}, `${i}-${line.type}`))
		})
	});
}
function PreviewPanel({ compact = false }) {
	const files = useStudioStore((s) => s.files);
	const selectedFileId = useStudioStore((s) => s.selectedFileId);
	const theme = useStudioStore((s) => s.theme);
	const showDiff = useStudioStore((s) => s.showDiff);
	const setShowDiff = useStudioStore((s) => s.setShowDiff);
	const updateFileContent = useStudioStore((s) => s.updateFileContent);
	const copySelected = useStudioStore((s) => s.copySelected);
	const downloadSelectedFile = useStudioStore((s) => s.downloadSelectedFile);
	const formatSelected = useStudioStore((s) => s.formatSelected);
	const file = files.find((f) => f.id === selectedFileId) ?? files[0];
	const [editor, setEditor] = (0, import_react.useState)(null);
	if (!file) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-full items-center justify-center p-6 text-sm text-foreground-muted",
		children: "Select a file from Structure."
	});
	const actions = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "button",
			variant: "ghost",
			size: compact ? "icon-lg" : "icon",
			"aria-label": "Copy file",
			onClick: () => void copySelected(),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "button",
			variant: "ghost",
			size: compact ? "icon-lg" : "icon",
			"aria-label": "Download file",
			onClick: downloadSelectedFile,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "button",
			variant: "ghost",
			size: compact ? "icon-lg" : "icon",
			"aria-label": "Format file",
			onClick: formatSelected,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Type, { className: "size-4" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "button",
			variant: "ghost",
			size: compact ? "icon-lg" : "icon",
			"aria-label": "Find in file",
			onClick: () => editor?.trigger("keyboard", "actions.find", void 0),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "button",
			variant: showDiff ? "secondary" : "ghost",
			size: compact ? "icon-lg" : "icon",
			"aria-label": "Toggle diff",
			"aria-pressed": showDiff,
			onClick: () => setShowDiff(!showDiff),
			disabled: !file.originText,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs",
				children: "±"
			})
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 min-w-0 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-11 shrink-0 items-center gap-2 border-b border-border px-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "min-w-0 flex-1 truncate font-mono text-xs",
						title: file.path,
						children: file.path
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "outline",
						children: [countLines(file.content), " lines"]
					}),
					compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon-lg",
							"aria-label": "Editor actions",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onSelect: () => void copySelected(),
								children: "Copy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onSelect: downloadSelectedFile,
								children: "Download"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onSelect: formatSelected,
								children: "Format"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onSelect: () => editor?.trigger("keyboard", "actions.find", void 0),
								children: "Search"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onSelect: () => setShowDiff(!showDiff),
								disabled: !file.originText,
								children: showDiff ? "Hide diff" : "Show diff"
							})
						]
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center",
						children: actions
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-h-0 min-w-0 flex-1 overflow-hidden",
				children: showDiff && file.originText ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiffView, {
					original: file.originText,
					current: file.content
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonacoPane, {
					value: file.content,
					path: file.path,
					language: monacoLanguage(file.language, file.path),
					theme,
					onChange: (value) => updateFileContent(file.id, value),
					onMountRef: setEditor
				}, file.id)
			}),
			compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex shrink-0 items-center justify-around border-t border-border bg-background-muted px-1 py-1 safe-pb",
				children: actions
			}) : null
		]
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		"data-slot": "textarea",
		className: cn("flex min-h-40 w-full min-w-0 rounded-lg border border-input bg-background-muted px-3 py-2 font-mono text-sm text-foreground outline-none placeholder:text-foreground-muted", "focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Slider({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
		"data-slot": "slider",
		className: cn("relative flex h-11 w-full touch-none items-center select-none md:h-8", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
			className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-brand" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-5 rounded-full border border-border bg-foreground shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring" })]
	});
}
function Switch({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
		"data-slot": "switch",
		className: cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-border transition-colors", "focus-visible:ring-2 focus-visible:ring-ring data-[state=checked]:bg-brand data-[state=unchecked]:bg-surface", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block size-5 rounded-full bg-foreground shadow-sm transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5 data-[state=checked]:bg-primary-foreground") })
	});
}
var MODES = [
	{
		id: "minimal",
		label: "Minimal",
		hint: "A few large modules"
	},
	{
		id: "balanced",
		label: "Balanced",
		hint: "Group by concern"
	},
	{
		id: "maximum",
		label: "Maximum",
		hint: "One unit per file"
	}
];
function ModePicker() {
	const mode = useStudioStore((s) => s.settings.mode);
	const updateSettings = useStudioStore((s) => s.updateSettings);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "radiogroup",
		"aria-label": "Split mode",
		className: "grid grid-cols-3 gap-1.5",
		children: MODES.map((item) => {
			const active = mode === item.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				role: "radio",
				"aria-checked": active,
				onClick: () => updateSettings({ mode: item.id }),
				className: cn("flex min-h-11 flex-col items-start justify-center rounded-lg border px-2 py-1.5 text-left transition-colors", active ? "border-brand bg-brand/10 text-foreground" : "border-border bg-background-muted text-foreground-muted hover:text-foreground"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold",
					children: item.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden text-xs leading-tight md:block",
					children: item.hint
				})]
			}, item.id);
		})
	});
}
function AdvancedFields() {
	const settings = useStudioStore((s) => s.settings);
	const updateSettings = useStudioStore((s) => s.updateSettings);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			[
				{
					key: "preserveComments",
					label: "Preserve comments",
					hint: "Keep origin markers"
				},
				{
					key: "generateBarrel",
					label: "Barrel index",
					hint: "Re-export from src/index"
				},
				{
					key: "generateReadme",
					label: "Generate README",
					hint: "Project layout notes"
				},
				{
					key: "generateTests",
					label: "Test stubs",
					hint: "Describe/it scaffolds"
				},
				{
					key: "includeTypesFile",
					label: "Types file",
					hint: "Extract interfaces"
				},
				{
					key: "folderByKind",
					label: "Kind folders",
					hint: "types/, classes/, …"
				}
			].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-11 items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: row.key,
						className: "text-foreground",
						children: row.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-foreground-muted",
						children: row.hint
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
					id: row.key,
					checked: Boolean(settings[row.key]),
					onCheckedChange: (checked) => updateSettings({ [row.key]: checked }),
					"aria-label": row.label
				})]
			}, row.key)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "max-lines",
						children: "Max file lines"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs tabular-nums text-foreground",
						children: settings.maxFileLines
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					id: "max-lines",
					min: 40,
					max: 400,
					step: 10,
					value: [settings.maxFileLines],
					onValueChange: ([value]) => updateSettings({ maxFileLines: value ?? 160 }),
					"aria-label": "Maximum file lines"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "naming",
					children: "Naming convention"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: settings.naming,
					onValueChange: (value) => updateSettings({ naming: value }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "naming",
						"aria-label": "Naming convention",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "kebab",
							children: "kebab-case"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "camel",
							children: "camelCase"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "pascal",
							children: "PascalCase"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "snake",
							children: "snake_case"
						})
					] })]
				})]
			})
		]
	});
}
function SplitControls({ compact = false }) {
	const resplit = useStudioStore((s) => s.resplit);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModePicker, {}),
			compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: "advanced",
					className: "border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: "Advanced settings" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdvancedFields, {}) })]
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border-muted bg-background-muted p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs font-medium tracking-wide text-foreground-muted uppercase",
					children: "Advanced settings"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdvancedFields, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				className: "h-11 w-full md:h-9",
				onClick: resplit,
				children: "Re-split source"
			})
		]
	});
}
function SourcePanel({ compact = false }) {
	const source = useStudioStore((s) => s.source);
	const loadSource = useStudioStore((s) => s.loadSource);
	const loadSample = useStudioStore((s) => s.loadSample);
	const setSourceContent = useStudioStore((s) => s.setSourceContent);
	const resplit = useStudioStore((s) => s.resplit);
	const inputRef = (0, import_react.useRef)(null);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const onFile = (0, import_react.useCallback)(async (file) => {
		if (!file) return;
		const content = await file.text();
		loadSource(file.name, content);
	}, [loadSource]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-full min-h-0 min-w-0 flex-col",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "panel-scroll flex flex-1 flex-col gap-3 p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onDragOver: (e) => {
						e.preventDefault();
						setDragging(true);
					},
					onDragLeave: () => setDragging(false),
					onDrop: (e) => {
						e.preventDefault();
						setDragging(false);
						onFile(e.dataTransfer.files[0]);
					},
					className: cn("flex min-h-28 flex-col items-center justify-center gap-2 rounded-xl border border-dashed px-3 py-4 text-center transition-colors", dragging ? "border-brand bg-brand/10" : "border-border bg-background-muted"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUp, {
							className: "size-5 text-brand",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "Drop a source file"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-foreground-muted",
							children: "or paste below. JS, TS, Python, Go, and more."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: inputRef,
							type: "file",
							className: "sr-only",
							accept: ".js,.jsx,.ts,.tsx,.mjs,.cjs,.py,.go,.rs,.java,.rb,.css,.html,.json,.md,.vue,.svelte,.php,.sql,.sh",
							onChange: (e) => {
								onFile(e.target.files?.[0]);
								e.target.value = "";
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							size: "lg",
							className: "w-full max-w-xs md:h-9 md:w-auto",
							onClick: () => inputRef.current?.click(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-4" }), "Choose file"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 flex-col gap-1 rounded-lg border border-border-muted bg-background-muted px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate font-mono text-sm",
						title: source.name,
						children: source.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-foreground-muted tabular-nums",
						children: [
							LANGUAGE_LABEL[source.language],
							" · ",
							formatBytes(byteSize(source.content)),
							" · ",
							countLines(source.content),
							" lines"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-2 sm:flex-row",
					children: Object.keys(SAMPLES).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						size: "lg",
						className: "w-full justify-start md:h-9 md:flex-1 md:px-2 md:text-xs",
						onClick: () => loadSample(id),
						children: SAMPLES[id].label
					}, id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-0 flex-col gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "source-paste",
							className: "text-xs font-medium text-foreground-muted",
							children: "Original source"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "source-paste",
							value: source.content,
							onChange: (e) => setSourceContent(e.target.value),
							spellCheck: false,
							className: "min-h-48 flex-1 md:min-h-56",
							"aria-label": "Paste or edit original source"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "secondary",
							size: "lg",
							className: "w-full md:h-9",
							onClick: resplit,
							children: "Apply pasted source"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitControls, { compact })
			]
		})
	});
}
function PanelLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-8 shrink-0 items-center border-b border-border px-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-medium tracking-widest text-foreground-muted uppercase",
			children
		})
	});
}
function DesktopShell() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh min-h-0 min-w-0 flex-col bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-0 min-w-0 flex-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(pn, {
				orientation: "vertical",
				className: "h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(yn, {
						defaultSize: "72%",
						minSize: "42%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(pn, {
							orientation: "horizontal",
							className: "h-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(yn, {
									defaultSize: "24%",
									minSize: "16%",
									className: "min-w-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex h-full min-h-0 min-w-0 flex-col border-r border-border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLabel, { children: "Source" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "min-h-0 min-w-0 flex-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourcePanel, {})
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(bn, { className: "w-1" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(yn, {
									defaultSize: "26%",
									minSize: "16%",
									className: "min-w-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex h-full min-h-0 min-w-0 flex-col border-r border-border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLabel, { children: "Structure" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "min-h-0 min-w-0 flex-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileTreePanel, {})
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(bn, { className: "w-1" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(yn, {
									defaultSize: "50%",
									minSize: "24%",
									className: "min-w-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex h-full min-h-0 min-w-0 flex-col",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLabel, { children: "Preview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "min-h-0 min-w-0 flex-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewPanel, {})
										})]
									})
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(bn, { className: "h-1" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(yn, {
						defaultSize: "28%",
						minSize: "16%",
						className: "min-w-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-full min-h-0 min-w-0 flex-col border-t border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLabel, { children: "Analysis" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "min-h-0 min-w-0 flex-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalysisPanel, {})
							})]
						})
					})
				]
			})
		})]
	});
}
var TABS = [
	{
		id: "source",
		label: "Source",
		icon: FileCode
	},
	{
		id: "structure",
		label: "Structure",
		icon: FolderTree
	},
	{
		id: "preview",
		label: "Preview",
		icon: CodeXml
	},
	{
		id: "analysis",
		label: "Analysis",
		icon: ChartColumn
	}
];
function MobileTabBar() {
	const mobileTab = useStudioStore((s) => s.mobileTab);
	const setMobileTab = useStudioStore((s) => s.setMobileTab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		role: "tablist",
		"aria-label": "Studio sections",
		className: "flex shrink-0 overflow-x-auto border-b border-border bg-background px-1",
		children: TABS.map((tab) => {
			const active = mobileTab === tab.id;
			const Icon = tab.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				role: "tab",
				"aria-selected": active,
				"aria-controls": `panel-${tab.id}`,
				id: `tab-${tab.id}`,
				onClick: () => setMobileTab(tab.id),
				className: cn("flex min-h-11 min-w-16 flex-1 items-center justify-center gap-1.5 px-3 text-xs font-medium transition-colors", active ? "border-b-2 border-brand text-foreground" : "text-foreground-muted"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-4",
					"aria-hidden": true
				}), tab.label]
			}, tab.id);
		})
	});
}
function MobileShell() {
	const mobileTab = useStudioStore((s) => s.mobileTab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh min-h-0 min-w-0 flex-col overflow-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileTabBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative min-h-0 min-w-0 flex-1 overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "panel-source",
						role: "tabpanel",
						"aria-labelledby": "tab-source",
						hidden: mobileTab !== "source",
						className: "h-full min-h-0 min-w-0",
						children: mobileTab === "source" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourcePanel, { compact: true }) : null
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "panel-structure",
						role: "tabpanel",
						"aria-labelledby": "tab-structure",
						hidden: mobileTab !== "structure",
						className: "h-full min-h-0 min-w-0",
						children: mobileTab === "structure" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileTreePanel, {}) : null
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "panel-preview",
						role: "tabpanel",
						"aria-labelledby": "tab-preview",
						hidden: mobileTab !== "preview",
						className: "h-full min-h-0 min-w-0",
						children: mobileTab === "preview" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewPanel, { compact: true }) : null
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "panel-analysis",
						role: "tabpanel",
						"aria-labelledby": "tab-analysis",
						hidden: mobileTab !== "analysis",
						className: "h-full min-h-0 min-w-0",
						children: mobileTab === "analysis" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalysisPanel, {}) : null
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileExportBar, {})
		]
	});
}
function StudioApp() {
	const isDesktop = useIsDesktop();
	const theme = useStudioStore((s) => s.theme);
	(0, import_react.useEffect)(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);
	if (isDesktop === null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-dvh items-center justify-center bg-background text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-foreground-muted",
			children: "Loading Splitter Studio…"
		})
	});
	return isDesktop ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopShell, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileShell, {});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioApp, {});
}
//#endregion
export { Home as component };
