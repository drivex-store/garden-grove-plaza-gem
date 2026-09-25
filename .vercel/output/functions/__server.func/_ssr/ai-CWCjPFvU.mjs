import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-CWCjPFvU.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
var runRefactor_createServerFn_handler = createServerRpc({
	id: "fc7cbc73f083660068a23073a59e9b01ff7605201087ab23ca54dc1365e1ed48",
	name: "runRefactor",
	filename: "src/lib/ai.ts"
}, (opts) => runRefactor.__executeServer(opts));
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
}).handler(runRefactor_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "AI is not available in this environment."
	};
	const spec = ACTIONS[data.action];
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			max_tokens: 1800,
			temperature: .2,
			messages: [{
				role: "system",
				content: "You are a senior engineer inside Splitter Studio. Return ONLY the updated source code. No markdown fences, no commentary."
			}, {
				role: "user",
				content: `${spec.instruction}\n\nFile: ${data.filePath}\nLanguage: ${data.language}\n\n${data.content}`
			}]
		})
	});
	if (!res.ok) return {
		ok: false,
		error: `xAI API error ${res.status}`
	};
	let text = (await res.json()).choices?.[0]?.message?.content ?? "";
	text = text.replace(/^```[a-zA-Z]*\n?/, "").replace(/\n?```$/, "").trim();
	if (!text) return {
		ok: false,
		error: "The model returned an empty response."
	};
	return {
		ok: true,
		text,
		title: spec.title
	};
});
//#endregion
export { runRefactor_createServerFn_handler };
