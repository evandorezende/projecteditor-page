(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/lib/client/http-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HttpClient",
    ()=>HttpClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$13$2e$2$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$cookie$40$3$2e$0$2e$5$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/js-cookie@3.0.5/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
;
;
const AUTH_TOKEN_KEY = "auth_token";
const Axios = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$13$2e$2$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:4000/api"),
    timeout: 5000000,
    headers: {
        "Content-Type": "application/json"
    }
});
Axios.interceptors.request.use((config)=>{
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$cookie$40$3$2e$0$2e$5$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(AUTH_TOKEN_KEY);
    config.headers.Authorization = `Bearer ${token ?? ""}`;
    // Don't set Content-Type for FormData, let browser set it with boundary
    if (config.data instanceof FormData) {
        delete config.headers["Content-Type"];
    }
    return config;
});
Axios.interceptors.response.use((response)=>response, (error)=>{
    if (error.response?.status === 401) {
        console.log("Authentication error, redirecting...");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$js$2d$cookie$40$3$2e$0$2e$5$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove(AUTH_TOKEN_KEY);
    }
    return Promise.reject(error);
});
class HttpClient {
    static async get(url, params) {
        const response = await Axios.get(url, {
            params
        });
        return response.data;
    }
    static async post(url, data, options) {
        const response = await Axios.post(url, data, options);
        return response.data;
    }
    static async put(url, data) {
        const response = await Axios.put(url, data);
        return response.data;
    }
    static async delete(url, data) {
        const response = await Axios.delete(url, {
            data
        });
        return response.data;
    }
    static async download(url) {
        const response = await Axios.get(url, {
            responseType: "blob"
        });
        return response.data;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/api-endpoints.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_ENDPOINTS",
    ()=>API_ENDPOINTS
]);
const API_ENDPOINTS = {
    PROJECTS: "/projects",
    MESSAGES: "/messages"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/client/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/client/http-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/api-endpoints.ts [app-client] (ecmascript)");
;
;
class Client {
    project = {
        all: ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].get(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS);
        },
        get: (id)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS}/${id}`);
        },
        create: (data)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS, data);
        },
        update: (id, data)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].put(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS}/${id}`, data);
        },
        delete: (id)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].delete(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS}/${id}`);
        },
        createTask: (projectId, data)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS}/${projectId}/tasks`, data);
        },
        deleteTask: (projectId, taskId)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].delete(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS}/${projectId}/tasks/${taskId}`);
        },
        deleteTasks: (projectId, taskIds)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].delete(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS}/${projectId}/tasks`, {
                taskIds
            });
        },
        updateTask: (projectId, taskId, data)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].put(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS}/${projectId}/tasks/${taskId}`, data);
        },
        importTasks: async (projectId, file)=>{
            const formData = new FormData();
            formData.append("file", file);
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS}/${projectId}/import`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
        },
        exportTasks: async (projectId, format = 'csv')=>{
            const blob = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].download(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS}/${projectId}/export?format=${format}`);
            // Create a download link and trigger it
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            const extension = format === 'xml' ? 'xml' : 'csv';
            link.download = `project-${projectId}-tasks.${extension}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            return {
                success: true
            };
        },
        reorderTask: (projectId, taskId, direction)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS}/${projectId}/tasks/${taskId}/reorder`, {
                direction
            });
        },
        indentTask: (projectId, taskId)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS}/${projectId}/tasks/${taskId}/indent`, {});
        },
        outdentTask: (projectId, taskId)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS}/${projectId}/tasks/${taskId}/outdent`, {});
        },
        undoTask: (projectId)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS}/${projectId}/undo`, {});
        },
        redoTask: (projectId)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS}/${projectId}/redo`, {});
        },
        getPendingChanges: (projectId)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS}/${projectId}/changes`);
        },
        keepChanges: (projectId, changeSetId)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS}/${projectId}/changes/keep`, {
                changeSetId
            });
        },
        undoChanges: (projectId, changeSetId)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS}/${projectId}/changes/undo`, {
                changeSetId
            });
        }
    };
    messages = {
        getMany: (projectId)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].MESSAGES}?projectId=${projectId}`);
        },
        create: (data)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$http$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].MESSAGES, data);
        }
    };
}
const client = new Client();
const __TURBOPACK__default__export__ = client;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/client/api-endpoints.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_ENDPOINTS",
    ()=>API_ENDPOINTS
]);
const API_ENDPOINTS = {
    PROJECTS: "/projects",
    MESSAGES: "/messages"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/config/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteSettings",
    ()=>siteSettings
]);
const siteSettings = {
    name: "Projects Editor",
    description: "Create, manage and edit projects",
    toaster_options: {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/date-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adjustToWorkingDay",
    ()=>adjustToWorkingDay,
    "calculateDuration",
    ()=>calculateDuration,
    "calculateFinish",
    ()=>calculateFinish,
    "calculateStart",
    ()=>calculateStart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$addBusinessDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addBusinessDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$differenceInBusinessDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/differenceInBusinessDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$isWeekend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isWeekend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)");
;
function adjustToWorkingDay(date, direction = "forward") {
    let result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(date);
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$isWeekend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWeekend"])(result)){
        result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$addBusinessDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBusinessDays"])(result, direction === "forward" ? 1 : -1);
    }
    return result;
}
function calculateFinish(start, duration) {
    if (duration === 0) return start;
    // In project management, a 1-day task starting Monday finishes Monday.
    // addBusinessDays(Monday, 1) returns Tuesday. So we use duration - 1.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$addBusinessDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBusinessDays"])(start, Math.max(0, duration - 1));
}
function calculateStart(finish, duration) {
    if (duration === 0) return finish;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$addBusinessDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBusinessDays"])(finish, -Math.max(0, duration - 1));
}
function calculateDuration(start, finish) {
    if (start > finish) return 0;
    // differenceInBusinessDays returns the number of full business days between dates.
    // Monday to Monday is 0, but should be 1 day. So we add 1.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$differenceInBusinessDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInBusinessDays"])(finish, start) + 1;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/duration-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DurationUnit",
    ()=>DurationUnit,
    "DurationUtils",
    ()=>DurationUtils
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$addBusinessDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addBusinessDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addDays.js [app-client] (ecmascript)");
;
var DurationUnit = /*#__PURE__*/ function(DurationUnit) {
    DurationUnit[DurationUnit["MINUTE"] = 0] = "MINUTE";
    DurationUnit[DurationUnit["HOUR"] = 1] = "HOUR";
    DurationUnit[DurationUnit["DAY"] = 2] = "DAY";
    DurationUnit[DurationUnit["WEEK"] = 3] = "WEEK";
    DurationUnit[DurationUnit["MONTH"] = 4] = "MONTH";
    DurationUnit[DurationUnit["YEAR"] = 5] = "YEAR";
    DurationUnit[DurationUnit["PERCENT"] = 6] = "PERCENT";
    return DurationUnit;
}({});
const VALUE_MASK = (BigInt(1) << BigInt(44)) - BigInt(1);
const UNIT_SHIFT = BigInt(44);
const UNIT_MASK = BigInt(0xf);
const ELAPSED_BIT = BigInt(1) << BigInt(48);
const ESTIMATED_BIT = BigInt(1) << BigInt(49);
const UNIT_SYMBOLS = {
    [0]: [
        "m",
        "min",
        "minute",
        "minutes"
    ],
    [1]: [
        "h",
        "hr",
        "hour",
        "hours"
    ],
    [2]: [
        "d",
        "dy",
        "day",
        "days"
    ],
    [3]: [
        "w",
        "wk",
        "week",
        "weeks"
    ],
    [4]: [
        "mo",
        "mon",
        "month",
        "months"
    ],
    [5]: [
        "y",
        "yr",
        "year",
        "years"
    ],
    [6]: [
        "%"
    ]
};
const STRING_TO_UNIT = {
    m: 0,
    h: 1,
    d: 2,
    w: 3,
    mo: 4,
    y: 5,
    "%": 6
};
class DurationUtils {
    static encode(data) {
        let packed = BigInt(Math.floor(data.value)) & VALUE_MASK;
        packed |= (BigInt(data.unit) & UNIT_MASK) << UNIT_SHIFT;
        if (data.isElapsed) packed |= ELAPSED_BIT;
        if (data.isEstimated) packed |= ESTIMATED_BIT;
        return Number(packed);
    }
    static decode(packedNumber) {
        if (packedNumber === null || packedNumber === undefined) {
            return {
                value: 0,
                unit: 2,
                isElapsed: false,
                isEstimated: false
            };
        }
        const packed = BigInt(packedNumber);
        return {
            value: Number(packed & VALUE_MASK),
            unit: Number(packed >> UNIT_SHIFT & UNIT_MASK),
            isElapsed: (packed & ELAPSED_BIT) !== BigInt(0),
            isEstimated: (packed & ESTIMATED_BIT) !== BigInt(0)
        };
    }
    static parse(input, settings, defaultUnit = 2) {
        const trimmed = input.trim().toLowerCase();
        if (!trimmed) return 0;
        // 1. Check for estimated flag
        const isEstimated = trimmed.endsWith("?");
        let cleanInput = isEstimated ? trimmed.slice(0, -1).trim() : trimmed;
        // 2. Handle optional signs
        if (cleanInput.startsWith("+")) cleanInput = cleanInput.slice(1).trim();
        // 3. Regex to match [value][unit]
        const match = cleanInput.match(/^([\d.]+)\s*([a-z%]*)$/);
        if (!match) return 0;
        const amount = parseFloat(match[1] || "0");
        let unitStr = match[2] || "";
        let isElapsed = false;
        // 4. Identify "Elapsed" units (starting with 'e')
        if (unitStr.startsWith("e") && unitStr !== "every" && unitStr !== "each") {
            isElapsed = true;
            unitStr = unitStr.slice(1);
        }
        // 5. Match unit string against symbol map
        let unit;
        if (typeof defaultUnit === "string") {
            unit = STRING_TO_UNIT[defaultUnit] ?? 2;
        } else {
            unit = defaultUnit;
        }
        if (unitStr) {
            const foundUnitEntry = Object.entries(UNIT_SYMBOLS).find(([_, symbols])=>symbols.includes(unitStr));
            if (foundUnitEntry) {
                unit = Number(foundUnitEntry[0]);
            }
        }
        let valueInMs = 0;
        if (unit === 6) {
            valueInMs = amount;
        } else {
            const minutes = this.convertToMinutes(amount, unit, settings, isElapsed);
            valueInMs = minutes * 60 * 1000;
        }
        return this.encode({
            value: valueInMs,
            unit,
            isElapsed,
            isEstimated
        });
    }
    static format(packedNumber, settings) {
        if (packedNumber === null || packedNumber === undefined) return "";
        const decoded = this.decode(packedNumber);
        if (decoded.unit === 6) {
            return `${decoded.value}%${decoded.isEstimated ? "?" : ""}`;
        }
        const valueInMinutes = decoded.value / (60 * 1000);
        const amount = this.convertFromMinutes(valueInMinutes, decoded.unit, settings, decoded.isElapsed);
        let unitStr = "";
        switch(decoded.unit){
            case 0:
                unitStr = "m";
                break;
            case 1:
                unitStr = "h";
                break;
            case 2:
                unitStr = "d";
                break;
            case 3:
                unitStr = "w";
                break;
            case 4:
                unitStr = "mo";
                break;
            case 5:
                unitStr = "y";
                break;
        }
        const elapsedPrefix = decoded.isElapsed ? "e" : "";
        const estimatedSuffix = decoded.isEstimated ? "?" : "";
        // Round to 2 decimal places if needed, but remove trailing zeros
        const formattedAmount = Number((Math.round(amount * 100) / 100).toFixed(2)).toString();
        return `${formattedAmount}${elapsedPrefix}${unitStr}${estimatedSuffix}`;
    }
    /**
   * Calculates a new date based on a base date and a bit-packed duration.
   * Handles both elapsed (calendar) and standard (working) durations.
   */ static calculateDate(baseDate, packedDuration, settings, direction) {
        if (packedDuration === null || packedDuration === undefined) return baseDate;
        const decoded = this.decode(packedDuration);
        if (decoded.value === 0) return baseDate;
        const { value: durationMs, isElapsed } = decoded;
        if (isElapsed) {
            const days = durationMs / (24 * 60 * 60 * 1000);
            return direction === "forward" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(baseDate, days) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(baseDate, -days);
        } else {
            const minutes = durationMs / (60 * 1000);
            const days = minutes / settings.minutesPerDay;
            // In project management, a 1-day task starting Monday finishes Monday.
            // addBusinessDays(Monday, 1) returns Tuesday. So we use days - 1.
            const adjustedDays = Math.max(0, days - 1);
            return direction === "forward" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$addBusinessDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBusinessDays"])(baseDate, adjustedDays) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$addBusinessDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBusinessDays"])(baseDate, -adjustedDays);
        }
    }
    static convertToMinutes(amount, unit, settings, isElapsed) {
        if (isElapsed) {
            switch(unit){
                case 0:
                    return amount;
                case 1:
                    return amount * 60;
                case 2:
                    return amount * 24 * 60;
                case 3:
                    return amount * 7 * 24 * 60;
                case 4:
                    return amount * 30 * 24 * 60;
                case 5:
                    return amount * 365 * 24 * 60;
                default:
                    return amount;
            }
        } else {
            switch(unit){
                case 0:
                    return amount;
                case 1:
                    return amount * 60;
                case 2:
                    return amount * settings.minutesPerDay;
                case 3:
                    return amount * settings.minutesPerWeek;
                case 4:
                    return amount * settings.daysPerMonth * settings.minutesPerDay;
                case 5:
                    return amount * 12 * settings.daysPerMonth * settings.minutesPerDay;
                default:
                    return amount;
            }
        }
    }
    static convertFromMinutes(minutes, unit, settings, isElapsed) {
        if (isElapsed) {
            switch(unit){
                case 0:
                    return minutes;
                case 1:
                    return minutes / 60;
                case 2:
                    return minutes / (24 * 60);
                case 3:
                    return minutes / (7 * 24 * 60);
                case 4:
                    return minutes / (30 * 24 * 60);
                case 5:
                    return minutes / (365 * 24 * 60);
                default:
                    return minutes;
            }
        } else {
            switch(unit){
                case 0:
                    return minutes;
                case 1:
                    return minutes / 60;
                case 2:
                    return minutes / settings.minutesPerDay;
                case 3:
                    return minutes / settings.minutesPerWeek;
                case 4:
                    return minutes / (settings.daysPerMonth * settings.minutesPerDay);
                case 5:
                    return minutes / (12 * settings.daysPerMonth * settings.minutesPerDay);
                default:
                    return minutes;
            }
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/task-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyTaskUpdate",
    ()=>applyTaskUpdate,
    "buildHierarchy",
    ()=>buildHierarchy,
    "canMoveTaskDown",
    ()=>canMoveTaskDown,
    "canMoveTaskLeft",
    ()=>canMoveTaskLeft,
    "canMoveTaskRight",
    ()=>canMoveTaskRight,
    "canMoveTaskUp",
    ()=>canMoveTaskUp,
    "findParentTask",
    ()=>findParentTask,
    "findPreviousSibling",
    ()=>findPreviousSibling,
    "generatePatch",
    ()=>generatePatch,
    "getNewParentIdForMoveLeft",
    ()=>getNewParentIdForMoveLeft,
    "getSortedSiblings",
    ()=>getSortedSiblings,
    "transformForApi",
    ()=>transformForApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/date-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$duration$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/duration-utils.ts [app-client] (ecmascript)");
;
;
// Helper to normalize various task input values to their correct types
const normalizeTaskValue = (key, value)=>{
    if (value === undefined || value === null) return null;
    if (key === "duration") {
        // Duration is now an encoded number (bigint in DB, number in JS)
        return typeof value === "number" ? value : parseInt(String(value), 10);
    } else if (key === "start" || key === "end") {
        if (typeof value === "string" && value.trim() === "") return null;
        try {
            const date = new Date(value);
            return isNaN(date.getTime()) ? null : date;
        } catch (e) {
            return null;
        }
    }
    return value;
};
const applyTaskUpdate = (currentTask, data, allTasks, settings)=>{
    let nextTask = {
        ...currentTask
    };
    // Default settings if not provided
    const projectSettings = settings || {
        minutesPerDay: 480,
        minutesPerWeek: 2400,
        daysPerMonth: 20
    };
    // --- Unified Update Pipeline (MS Project style) ---
    // Apply direct task property updates with normalization
    for(const key in data){
        if (Object.prototype.hasOwnProperty.call(data, key) && ![
            "predecessors",
            "successors",
            "start",
            "end",
            "duration"
        ].includes(key)) {
            const typedKey = key;
            nextTask[typedKey] = normalizeTaskValue(typedKey, data[typedKey]);
        }
    }
    // Handle direct dependency array updates
    if (data.predecessors !== undefined) {
        nextTask.predecessors = data.predecessors;
    }
    if (data.successors !== undefined) {
        nextTask.successors = data.successors;
    }
    // 1. Handle Start Date: Sets SNET constraint and updates start/end
    if (data.start !== undefined) {
        const newStart = normalizeTaskValue("start", data.start);
        if (newStart) {
            nextTask.start = newStart;
            // In a real MS Project, this sets a constraint. For optimistic UI,
            // we just update the start and shift the end while keeping duration.
            nextTask.end = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$duration$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DurationUtils"].calculateDate(newStart, nextTask.duration, projectSettings, "forward");
        }
    }
    // 2. Handle Finish Date: Updates Duration
    if (data.end !== undefined) {
        const newEnd = normalizeTaskValue("end", data.end);
        if (newEnd) {
            const currentStart = nextTask.start || new Date();
            const durationInDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateDuration"])(currentStart, newEnd);
            // Encode back to packed duration
            nextTask.duration = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$duration$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DurationUtils"].encode({
                value: durationInDays * projectSettings.minutesPerDay * 60 * 1000,
                unit: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$duration$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DurationUtils"].decode(nextTask.duration).unit ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$duration$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DurationUnit"].DAY,
                isElapsed: false,
                isEstimated: false
            });
            nextTask.end = newEnd;
        }
    }
    // 3. Handle Duration: Updates end
    if (data.duration !== undefined) {
        const newDuration = normalizeTaskValue("duration", data.duration);
        if (newDuration !== null) {
            nextTask.duration = newDuration;
            if (nextTask.start) {
                nextTask.end = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$duration$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DurationUtils"].calculateDate(nextTask.start, newDuration, projectSettings, "forward");
            }
        }
    }
    // 4. Handle Triple Constraint: Work = Duration * Units
    const effectiveTaskType = nextTask.taskType || "FIXED_UNITS";
    const packedDuration = nextTask.duration || 0;
    const decodedDuration = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$duration$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DurationUtils"].decode(packedDuration);
    const durationInDays = decodedDuration.value / (projectSettings.minutesPerDay * 60 * 1000);
    const currentWork = parseFloat(nextTask.work || "0");
    const currentUnits = parseFloat(nextTask.units || "1");
    if (data.duration !== undefined) {
        if (effectiveTaskType === "FIXED_WORK") {
            nextTask.units = durationInDays > 0 ? (currentWork / durationInDays).toFixed(2) : "0.00";
        } else {
            nextTask.work = (durationInDays * currentUnits).toFixed(2);
        }
    } else if (data.work !== undefined) {
        if (effectiveTaskType === "FIXED_DURATION") {
            nextTask.units = durationInDays > 0 ? (currentWork / durationInDays).toFixed(2) : "0.00";
        } else {
            const newDurationInDays = currentUnits > 0 ? currentWork / currentUnits : 0;
            nextTask.duration = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$duration$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DurationUtils"].encode({
                value: Math.round(newDurationInDays * projectSettings.minutesPerDay * 60 * 1000),
                unit: decodedDuration.unit || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$duration$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DurationUnit"].DAY,
                isElapsed: decodedDuration.isElapsed,
                isEstimated: decodedDuration.isEstimated
            });
            if (nextTask.start) {
                nextTask.end = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$duration$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DurationUtils"].calculateDate(nextTask.start, nextTask.duration, projectSettings, "forward");
            }
        }
    } else if (data.units !== undefined) {
        if (effectiveTaskType === "FIXED_WORK") {
            const newDurationInDays = currentUnits > 0 ? currentWork / currentUnits : 0;
            nextTask.duration = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$duration$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DurationUtils"].encode({
                value: Math.round(newDurationInDays * projectSettings.minutesPerDay * 60 * 1000),
                unit: decodedDuration.unit || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$duration$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DurationUnit"].DAY,
                isElapsed: decodedDuration.isElapsed,
                isEstimated: decodedDuration.isEstimated
            });
            if (nextTask.start) {
                nextTask.end = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$duration$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DurationUtils"].calculateDate(nextTask.start, nextTask.duration, projectSettings, "forward");
            }
        } else {
            nextTask.work = (durationInDays * currentUnits).toFixed(2);
        }
    }
    // --- END Unified Update Pipeline ---
    return nextTask;
};
const generatePatch = (initialTask, nextTask)=>{
    const undo = {};
    const redo = {};
    for(const key in nextTask){
        if (Object.prototype.hasOwnProperty.call(nextTask, key)) {
            const typedKey = key;
            // Handle direct properties
            if (typedKey !== "predecessors" && typedKey !== "successors" && nextTask[typedKey] !== initialTask[typedKey]) {
                undo[typedKey] = initialTask[typedKey];
                redo[typedKey] = nextTask[typedKey];
            }
            // Handle predecessors array changes
            if (typedKey === "predecessors") {
                const initialDeps = initialTask.predecessors || [];
                const nextDeps = nextTask.predecessors || [];
                // Check if arrays are different (by length or content)
                if (initialDeps.length !== nextDeps.length || JSON.stringify(initialDeps) !== JSON.stringify(nextDeps)) {
                    undo.predecessors = initialDeps;
                    redo.predecessors = nextDeps;
                }
            }
            // Handle successors array changes
            if (typedKey === "successors") {
                const initialDeps = initialTask.successors || [];
                const nextDeps = nextTask.successors || [];
                // Check if arrays are different (by length or content)
                if (initialDeps.length !== nextDeps.length || JSON.stringify(initialDeps) !== JSON.stringify(nextDeps)) {
                    undo.successors = initialDeps;
                    redo.successors = nextDeps;
                }
            }
        }
    }
    return {
        id: initialTask.id,
        undo,
        redo
    };
};
const transformForApi = (data, currentTask)=>{
    const apiData = {};
    for(const key in data){
        if (Object.prototype.hasOwnProperty.call(data, key) && ![
            "predecessors",
            "successors"
        ].includes(key)) {
            const typedKey = key;
            // Direct task properties are already normalized by applyTaskUpdate, but we need to convert dates/duration to string for API
            if (typedKey === "duration" && data[typedKey] !== undefined) {
                apiData[typedKey] = Number(data[typedKey]);
            } else if ((typedKey === "start" || typedKey === "end") && data[typedKey] !== undefined) {
                apiData[typedKey] = data[typedKey] === null ? undefined : new Date(data[typedKey]).toISOString();
            } else {
                apiData[typedKey] = data[typedKey];
            }
        }
    }
    // For dependencies, we need to consider the FINAL state of predecessors/successors after applyTaskUpdate
    // The `currentTask` parameter here is the *nextTask* from the atom, which has all local dependency updates.
    if (currentTask.predecessors) {
        apiData.predecessors = currentTask.predecessors.map((dep)=>({
                id: dep.id === -1 ? undefined : dep.id,
                predecessorId: dep.predecessorId,
                successorId: dep.successorId,
                type: dep.type,
                lag: dep.lag
            }));
    }
    if (currentTask.successors) {
        apiData.successors = currentTask.successors.map((dep)=>({
                id: dep.id === -1 ? undefined : dep.id,
                predecessorId: dep.predecessorId,
                successorId: dep.successorId,
                type: dep.type,
                lag: dep.lag
            }));
    }
    return apiData;
};
const buildHierarchy = (tasks, parentId = null, level = 0)=>{
    const sortedTasks = Object.values(tasks).filter((task)=>task.parentId === parentId).sort((a, b)=>(a.sortOrder || 0) - (b.sortOrder || 0));
    const result = [];
    for (const task of sortedTasks){
        result.push({
            ...task,
            level
        });
        result.push(...buildHierarchy(tasks, task.id, level + 1));
    }
    return result;
};
const findParentTask = (tasks, taskId)=>{
    const task = tasks[taskId];
    if (!task || !task.parentId) return null;
    return tasks[task.parentId] || null;
};
const findPreviousSibling = (tasks, task)=>{
    if (!task.parentId) {
        // Top-level task - find previous top-level task
        const topLevelTasks = Object.values(tasks).filter((t)=>!t.parentId).sort((a, b)=>(a.sortOrder || 0) - (b.sortOrder || 0));
        const index = topLevelTasks.findIndex((t)=>t.id === task.id);
        return index > 0 ? topLevelTasks[index - 1] : null;
    }
    // Find previous sibling with same parent
    const siblings = Object.values(tasks).filter((t)=>t.parentId === task.parentId).sort((a, b)=>(a.sortOrder || 0) - (b.sortOrder || 0));
    const index = siblings.findIndex((t)=>t.id === task.id);
    return index > 0 ? siblings[index - 1] : null;
};
const getSortedSiblings = (tasks, currentTask)=>{
    return Object.values(tasks).filter((t)=>t.parentId === currentTask.parentId).sort((a, b)=>(a.sortOrder ?? 0) - (b.sortOrder ?? 0));
};
const canMoveTaskUp = (tasks, selectedTaskIds)=>{
    if (selectedTaskIds.length !== 1) return false;
    const selectedTaskId = Number(selectedTaskIds[0]);
    const selectedTask = tasks[selectedTaskId];
    if (!selectedTask) return false;
    const siblings = getSortedSiblings(tasks, selectedTask);
    const currentIndex = siblings.findIndex((t)=>t.id === selectedTask.id);
    return currentIndex > 0;
};
const canMoveTaskDown = (tasks, selectedTaskIds)=>{
    if (selectedTaskIds.length !== 1) return false;
    const selectedTaskId = Number(selectedTaskIds[0]);
    const selectedTask = tasks[selectedTaskId];
    if (!selectedTask) return false;
    const siblings = getSortedSiblings(tasks, selectedTask);
    const currentIndex = siblings.findIndex((t)=>t.id === selectedTask.id);
    return currentIndex < siblings.length - 1;
};
const canMoveTaskRight = (tasks, selectedTaskIds)=>{
    if (selectedTaskIds.length === 0) return false;
    const sortedSelectedTasks = selectedTaskIds.map((id)=>tasks[Number(id)]) // O(1) lookup
    .filter((task)=>task !== undefined).sort((a, b)=>(a.sortOrder ?? 0) - (b.sortOrder ?? 0));
    if (sortedSelectedTasks.length === 0) return false;
    const firstSelectedTask = sortedSelectedTasks[0];
    const previousSibling = findPreviousSibling(tasks, firstSelectedTask);
    return previousSibling !== null;
};
const canMoveTaskLeft = (tasks, selectedTaskIds)=>{
    if (selectedTaskIds.length === 0) return false;
    return selectedTaskIds.every((selectedTaskId)=>{
        const selectedTask = tasks[Number(selectedTaskId)];
        if (!selectedTask) return false;
        return selectedTask.parentId !== null;
    });
};
const getNewParentIdForMoveLeft = (tasks, firstSelectedTask)=>{
    if (!firstSelectedTask.parentId) {
        return null;
    }
    const parentOfFirstSelectedTask = findParentTask(tasks, firstSelectedTask.id);
    return parentOfFirstSelectedTask ? parentOfFirstSelectedTask.parentId ?? null : null;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/store/state.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AVAILABLE_MODELS",
    ()=>AVAILABLE_MODELS,
    "VOID_NODES_COUNT",
    ()=>VOID_NODES_COUNT,
    "aiChangeGroupsAtom",
    ()=>aiChangeGroupsAtom,
    "displayTasksAtom",
    ()=>displayTasksAtom,
    "highlightedFieldsAtom",
    ()=>highlightedFieldsAtom,
    "isAgentDrawerOpenAtom",
    ()=>isAgentDrawerOpenAtom,
    "isAgentSidebarOpenAtom",
    ()=>isAgentSidebarOpenAtom,
    "leadColumnIndexAtom",
    ()=>leadColumnIndexAtom,
    "leadTaskIdAtom",
    ()=>leadTaskIdAtom,
    "messageFormInputAtom",
    ()=>messageFormInputAtom,
    "projectAtom",
    ()=>projectAtom,
    "projectCommandAtom",
    ()=>projectCommandAtom,
    "projectNameAtom",
    ()=>projectNameAtom,
    "redoStackAtom",
    ()=>redoStackAtom,
    "saveStatusAtom",
    ()=>saveStatusAtom,
    "selectedColumnIndicesAtom",
    ()=>selectedColumnIndicesAtom,
    "selectedModelKeyAtom",
    ()=>selectedModelKeyAtom,
    "selectedTaskIdsAtom",
    ()=>selectedTaskIdsAtom,
    "setProjectDataAtom",
    ()=>setProjectDataAtom,
    "setTasksAtom",
    ()=>setTasksAtom,
    "taskActionAtom",
    ()=>taskActionAtom,
    "taskIdToDisplayIndexAtom",
    ()=>taskIdToDisplayIndexAtom,
    "tasksAtom",
    ()=>tasksAtom,
    "undoStackAtom",
    ()=>undoStackAtom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jotai@2.16.1_@babel+core@7.28.5_@babel+template@7.27.2_@types+react@19.2.8_react@19.2.3/node_modules/jotai/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$task$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/task-utils.ts [app-client] (ecmascript)");
;
;
const tasksAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])({});
const projectAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(null);
const setProjectDataAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(null, (_get, set, project)=>{
    const { tasks, pendingChanges, name } = project;
    // Set the full project object
    set(projectAtom, project);
    // 1. Set Project Name
    set(projectNameAtom, name);
    // 2. Prepare Tasks Map
    let taskMap = {};
    if (Array.isArray(tasks)) {
        taskMap = tasks.reduce((acc, task)=>{
            acc[task.id] = task;
            return acc;
        }, {});
    } else if (tasks) {
        taskMap = {
            ...tasks
        };
    }
    // 3. Process Pending Changes and populate Groups
    const groupsMap = {};
    if (pendingChanges && pendingChanges.length > 0) {
        pendingChanges.forEach((change)=>{
            const task = taskMap[change.taskId];
            if (task) {
                // Merge field update with proper type conversion
                const field = change.field;
                let value = change.newValue;
                if (field === "start" || field === "end") {
                    value = value ? new Date(value) : null;
                } else if (field === "duration" || field === "sortOrder") {
                    value = value ? Number(value) : null;
                } else if (field === "parentId") {
                    value = value ? Number(value) : null;
                }
                task[field] = value;
                // Add to groups for UI highlighting
                if (!groupsMap[change.changeSetId]) {
                    groupsMap[change.changeSetId] = {
                        id: change.changeSetId,
                        taskIdFields: {}
                    };
                }
                if (!groupsMap[change.changeSetId].taskIdFields[change.taskId]) {
                    groupsMap[change.changeSetId].taskIdFields[change.taskId] = [];
                }
                if (!groupsMap[change.changeSetId].taskIdFields[change.taskId].includes(field)) {
                    groupsMap[change.changeSetId].taskIdFields[change.taskId].push(field);
                }
            }
        });
    }
    // 4. Scan for PROPOSED tasks (newly created by AI)
    Object.values(taskMap).forEach((task)=>{
        if (task.status === "PROPOSED" && task.changeSetId) {
            if (!groupsMap[task.changeSetId]) {
                groupsMap[task.changeSetId] = {
                    id: task.changeSetId,
                    taskIdFields: {}
                };
            }
            // For new tasks, we highlight all major fields to show the entire row is new
            if (!groupsMap[task.changeSetId].taskIdFields[task.id]) {
                groupsMap[task.changeSetId].taskIdFields[task.id] = [
                    "name",
                    "duration",
                    "start",
                    "end",
                    "predecessors",
                    "successors",
                    "quantity",
                    "unit",
                    "price"
                ];
            }
        }
    });
    if (Object.keys(groupsMap).length > 0) {
        set(aiChangeGroupsAtom, Object.values(groupsMap));
    } else {
        set(aiChangeGroupsAtom, []);
    }
    set(tasksAtom, taskMap);
});
const setTasksAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(null, (_get, set, tasks)=>{
    // Keep this for backward compatibility if needed, but setProjectDataAtom is preferred
    if (Array.isArray(tasks)) {
        const taskMap = tasks.reduce((acc, task)=>{
            acc[task.id] = task;
            return acc;
        }, {});
        set(tasksAtom, taskMap);
    } else {
        set(tasksAtom, tasks);
    }
});
const saveStatusAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])("idle");
const projectNameAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(undefined);
const selectedTaskIdsAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])([]);
const leadTaskIdAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(null);
const selectedColumnIndicesAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])([]);
const leadColumnIndexAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(null);
const messageFormInputAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])("");
const isAgentDrawerOpenAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(false);
const isAgentSidebarOpenAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(false);
const selectedModelKeyAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])("gemini-2.0-flash");
const AVAILABLE_MODELS = [
    {
        key: "gemini-2.0-flash",
        name: "Gemini 2.0 Flash",
        provider: "google"
    },
    {
        key: "gemini-1.5-pro",
        name: "Gemini 1.5 Pro",
        provider: "google"
    },
    {
        key: "gemma-3-27b-it",
        name: "Gemma 3 27B IT",
        provider: "google"
    },
    {
        key: "llama",
        name: "Llama",
        provider: "llama"
    }
];
const aiChangeGroupsAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])([]);
const highlightedFieldsAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])((get)=>{
    const groups = get(aiChangeGroupsAtom);
    const merged = {};
    groups.forEach((group)=>{
        Object.entries(group.taskIdFields).forEach(([taskId, fields])=>{
            const id = Number(taskId);
            merged[id] = Array.from(new Set([
                ...merged[id] || [],
                ...fields
            ]));
        });
    });
    return merged;
});
const taskIdToDisplayIndexAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])((get)=>{
    const tasks = get(displayTasksAtom);
    const map = {};
    tasks.forEach((task, index)=>{
        map[task.id] = index + 1;
    });
    return map;
});
const VOID_NODES_COUNT = 50;
const displayTasksAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])((get)=>{
    const tasks = get(tasksAtom);
    const hierarchy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$task$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildHierarchy"])(tasks);
    // Determine starting sortOrder for void tasks
    const rootTasks = Object.values(tasks).filter((t)=>!t.parentId).sort((a, b)=>(a.sortOrder ?? 0) - (b.sortOrder ?? 0));
    const lastRootSortOrder = rootTasks[rootTasks.length - 1]?.sortOrder ?? -1;
    const voidTasks = [];
    let count = 0;
    let i = 1;
    // Always maintain VOID_NODES_COUNT empty rows at the bottom
    while(count < VOID_NODES_COUNT){
        const virtualId = -i;
        // Only add as a void if it's not already "realized" in the tasksAtom (even with negative ID)
        if (!tasks[virtualId]) {
            voidTasks.push({
                id: virtualId,
                name: "",
                duration: null,
                start: null,
                end: null,
                status: "ACTIVE",
                type: "AUTO_SCHEDULE",
                schedulingMode: "AUTO",
                taskType: "FIXED_UNITS",
                isSummary: false,
                work: "0.00",
                units: "1.00",
                sortOrder: lastRootSortOrder + 1 + count,
                parentId: null,
                level: 0
            });
            count++;
        }
        i++;
    }
    return [
        ...hierarchy,
        ...voidTasks
    ];
});
const undoStackAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])([]);
const redoStackAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])([]);
const projectCommandAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(null, (get, set, action)=>{
    const allTasks = get(tasksAtom);
    let nextTasks = {
        ...allTasks
    }; // Use object spread for Record
    let patches = [];
    switch(action.type){
        case "CREATE_TASK":
            {
                const { parentId, sortOrder } = action.payload || {};
                // Find existing siblings and shift them
                const siblings = Object.values(nextTasks).filter((t)=>(t.parentId ?? null) === (parentId ?? null)).sort((a, b)=>(a.sortOrder ?? 0) - (b.sortOrder ?? 0));
                let finalSortOrder = sortOrder;
                if (finalSortOrder === undefined || finalSortOrder === null) {
                    finalSortOrder = (siblings[siblings.length - 1]?.sortOrder ?? -1) + 1;
                }
                // Shift siblings in the local state
                const updatedTasks = {
                    ...nextTasks
                };
                Object.values(updatedTasks).forEach((t)=>{
                    const tSortOrder = t.sortOrder ?? 0;
                    if ((t.parentId ?? null) === (parentId ?? null) && tSortOrder >= finalSortOrder) {
                        updatedTasks[t.id] = {
                            ...t,
                            sortOrder: tSortOrder + 1
                        };
                    }
                });
                // Create a temporary task object for optimistic UI
                // We use a negative ID to avoid collision until server responds
                const tempId = -Math.floor(Math.random() * 1000000);
                const newTask = {
                    id: tempId,
                    name: "",
                    parentId: parentId ?? null,
                    sortOrder: finalSortOrder,
                    duration: 1,
                    start: new Date(),
                    end: new Date(),
                    status: "ACTIVE",
                    type: "AUTO_SCHEDULE",
                    ...action.payload
                };
                updatedTasks[tempId] = newTask;
                set(tasksAtom, updatedTasks);
                break;
            }
        case "MOVE_RIGHT":
            {
                if (!action.ids || action.ids.length === 0) return;
                const sortedIds = [
                    ...action.ids
                ].sort((a, b)=>{
                    const taskA = allTasks[Number(a)];
                    const taskB = allTasks[Number(b)];
                    return (taskA?.sortOrder ?? 0) - (taskB?.sortOrder ?? 0);
                });
                const selectedTasks = sortedIds.map((id)=>allTasks[Number(id)]) // O(1) lookup
                .filter((t)=>!!t);
                if (selectedTasks.length === 0) return;
                const firstTask = selectedTasks[0];
                const previousSibling = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$task$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findPreviousSibling"])(allTasks, firstTask);
                if (!previousSibling) return;
                const newParentId = previousSibling.id;
                nextTasks = {
                    ...allTasks
                };
                patches = [];
                // Find existing children of the new parent to determine starting sortOrder
                const existingChildren = Object.values(allTasks).filter((t)=>t.parentId === newParentId).sort((a, b)=>(a.sortOrder ?? 0) - (b.sortOrder ?? 0));
                let nextSortOrder = (existingChildren[existingChildren.length - 1]?.sortOrder ?? -1) + 1;
                // Track which tasks were roots of selected fragments
                // A task is a root if its parent is NOT selected
                selectedTasks.forEach((t)=>{
                    const isRootOfSelection = !t.parentId || !action.ids?.includes(String(t.parentId));
                    if (isRootOfSelection) {
                        // Apply new parent only to roots of selected fragments
                        // This preserves internal hierarchy
                        patches.push({
                            id: t.id,
                            undo: {
                                parentId: t.parentId,
                                sortOrder: t.sortOrder
                            },
                            redo: {
                                parentId: newParentId,
                                sortOrder: nextSortOrder
                            }
                        });
                        nextTasks[t.id] = {
                            ...nextTasks[t.id],
                            parentId: newParentId,
                            sortOrder: nextSortOrder++
                        };
                    }
                });
                // Add patch for new parent type change
                patches.push({
                    id: previousSibling.id,
                    undo: {
                        type: previousSibling.type
                    },
                    redo: {
                        type: "SUMMARY"
                    }
                });
                // Set the new parent to SUMMARY type
                nextTasks[previousSibling.id] = {
                    ...nextTasks[previousSibling.id],
                    type: "SUMMARY"
                };
                set(tasksAtom, nextTasks);
                set(undoStackAtom, (prev)=>[
                        ...prev,
                        {
                            type: "MOVE_RIGHT",
                            patches
                        }
                    ]);
                set(redoStackAtom, []);
                break;
            }
        case "MOVE_LEFT":
            {
                if (!action.ids || action.ids.length === 0) return;
                const sortedIds = [
                    ...action.ids
                ].sort((a, b)=>{
                    const taskA = allTasks[Number(a)];
                    const taskB = allTasks[Number(b)];
                    return (taskA?.sortOrder ?? 0) - (taskB?.sortOrder ?? 0);
                });
                const selectedTasks = sortedIds.map((id)=>allTasks[Number(id)]) // O(1) lookup
                .filter((t)=>!!t);
                if (selectedTasks.length === 0) return;
                const firstSelectedTask = selectedTasks[0];
                if (!firstSelectedTask.parentId) return; // Cannot move top-level tasks left
                const parentOfFirstSelectedTask = allTasks[firstSelectedTask.parentId];
                if (!parentOfFirstSelectedTask) return;
                const newParentId = parentOfFirstSelectedTask.parentId ?? null;
                nextTasks = {
                    ...allTasks
                };
                patches = [];
                // Determine starting sortOrder in the new parent's context
                // We want to place the moved tasks AFTER their current parent
                const parentSortOrder = parentOfFirstSelectedTask.sortOrder ?? 0;
                // Shift existing siblings of the parent to make room
                Object.values(nextTasks).forEach((t)=>{
                    if (t.parentId === newParentId && (t.sortOrder ?? 0) > parentSortOrder) {
                        nextTasks[t.id] = {
                            ...t,
                            sortOrder: (t.sortOrder ?? 0) + selectedTasks.length
                        };
                    }
                });
                let nextSortOrder = parentSortOrder + 1;
                // Track parents that might become empty
                const potentialEmptyParentIds = new Set();
                selectedTasks.forEach((t)=>{
                    const isRootOfSelection = !t.parentId || !action.ids?.includes(String(t.parentId));
                    if (isRootOfSelection) {
                        if (t.parentId) potentialEmptyParentIds.add(t.parentId);
                        patches.push({
                            id: t.id,
                            undo: {
                                parentId: t.parentId,
                                sortOrder: t.sortOrder
                            },
                            redo: {
                                parentId: newParentId,
                                sortOrder: nextSortOrder
                            }
                        });
                        nextTasks[t.id] = {
                            ...nextTasks[t.id],
                            parentId: newParentId,
                            sortOrder: nextSortOrder++
                        };
                    }
                });
                // Check if old parents are now empty
                potentialEmptyParentIds.forEach((pId)=>{
                    const remainingChildren = Object.values(nextTasks).filter((t)=>t.parentId === pId);
                    if (remainingChildren.length === 0) {
                        const parentTask = allTasks[pId];
                        if (parentTask) {
                            patches.push({
                                id: pId,
                                undo: {
                                    type: parentTask.type
                                },
                                redo: {
                                    type: "AUTO_SCHEDULE"
                                }
                            });
                            nextTasks[pId] = {
                                ...nextTasks[pId],
                                type: "AUTO_SCHEDULE"
                            };
                        }
                    }
                });
                set(tasksAtom, nextTasks);
                set(undoStackAtom, (prev)=>[
                        ...prev,
                        {
                            type: "MOVE_LEFT",
                            patches
                        }
                    ]);
                set(redoStackAtom, []);
                break;
            }
        case "PUSH_TO_HISTORY":
            {
                if (!action.patch) return;
                set(undoStackAtom, (prev)=>[
                        ...prev,
                        {
                            type: "UPDATE_PARENT",
                            patches: [
                                action.patch
                            ]
                        }
                    ]);
                set(redoStackAtom, []);
                break;
            }
        case "UNDO":
            {
                const undoStack = get(undoStackAtom);
                if (undoStack.length === 0) return;
                const lastAction = undoStack[undoStack.length - 1];
                let revertedTasks = {
                    ...allTasks
                };
                for (const patch of lastAction.patches){
                    if (revertedTasks[patch.id]) {
                        revertedTasks[patch.id] = {
                            ...revertedTasks[patch.id],
                            ...patch.undo
                        };
                    }
                }
                set(tasksAtom, revertedTasks);
                if (lastAction.type === "AI_UPDATE") {
                    set(aiChangeGroupsAtom, (prev)=>prev.slice(0, -1));
                }
                set(undoStackAtom, (prev)=>prev.slice(0, -1));
                set(redoStackAtom, (prev)=>[
                        ...prev,
                        lastAction
                    ]);
                break;
            }
        case "REDO":
            {
                const redoStack = get(redoStackAtom);
                if (redoStack.length === 0) return;
                const nextAction = redoStack[redoStack.length - 1];
                let reAppliedTasks = {
                    ...allTasks
                };
                for (const patch of nextAction.patches){
                    if (reAppliedTasks[patch.id]) {
                        reAppliedTasks[patch.id] = {
                            ...reAppliedTasks[patch.id],
                            ...patch.redo
                        };
                    }
                }
                set(tasksAtom, reAppliedTasks);
                set(redoStackAtom, (prev)=>prev.slice(0, -1));
                set(undoStackAtom, (prev)=>[
                        ...prev,
                        nextAction
                    ]);
                break;
            }
        case "UNDO_SPECIFIC_GROUP":
            {
                if (!action.groupId) return;
                const undoStack = get(undoStackAtom);
                const changeGroups = get(aiChangeGroupsAtom);
                // Find the index of the group in the pending groups list
                const groupIdx = changeGroups.findIndex((g)=>g.id === action.groupId);
                if (groupIdx === -1) return;
                // The corresponding entry in the undo stack will be (lastIndex - (pendingGroupsCount - 1 - groupIdx))
                // This assumes AI updates are at the top of the stack.
                const stackIdx = undoStack.length - 1 - (changeGroups.length - 1 - groupIdx);
                const actionToUndo = undoStack[stackIdx];
                if (!actionToUndo || actionToUndo.type !== "AI_UPDATE") return;
                let revertedTasks = {
                    ...allTasks
                };
                for (const patch of actionToUndo.patches){
                    if (revertedTasks[patch.id]) {
                        revertedTasks[patch.id] = {
                            ...revertedTasks[patch.id],
                            ...patch.undo
                        };
                    }
                }
                set(tasksAtom, revertedTasks);
                // Remove from both atoms
                const newStack = [
                    ...undoStack
                ];
                newStack.splice(stackIdx, 1);
                set(undoStackAtom, newStack);
                break;
            }
        case "APPLY_AI_UPDATES":
            {
                if (!action.updates) return;
                const project = get(projectAtom);
                const settings = project ? {
                    minutesPerDay: project.minutesPerDay,
                    minutesPerWeek: project.minutesPerWeek,
                    daysPerMonth: project.daysPerMonth
                } : undefined;
                let currentTasks = {
                    ...allTasks
                };
                const patches = [];
                const groupFields = {};
                for (const update of action.updates){
                    const initialTask = currentTasks[update.id];
                    if (!initialTask) continue;
                    const nextTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$task$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTaskUpdate"])(initialTask, update.data, currentTasks, settings);
                    const patch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$task$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatePatch"])(initialTask, nextTask);
                    currentTasks[update.id] = nextTask;
                    patches.push(patch);
                    groupFields[update.id] = Object.keys(update.data);
                }
                set(tasksAtom, currentTasks);
                set(aiChangeGroupsAtom, (prev)=>[
                        ...prev,
                        {
                            id: crypto.randomUUID(),
                            taskIdFields: groupFields
                        }
                    ]);
                set(undoStackAtom, (prev)=>[
                        ...prev,
                        {
                            type: "AI_UPDATE",
                            patches
                        }
                    ]);
                set(redoStackAtom, []);
                break;
            }
    }
});
const taskActionAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(null, (get, set, action)=>{
    const allTasks = get(tasksAtom);
    let nextTasks = {
        ...allTasks
    };
    switch(action.type){
        case "UPDATE_TASK":
            {
                let initialTask = allTasks[action.id];
                // If it's a void task (negative ID), find it in displayTasks
                if (!initialTask && action.id < 0) {
                    const displayTasks = get(displayTasksAtom);
                    initialTask = displayTasks.find((t)=>t.id === action.id);
                }
                if (!initialTask) return {
                    nextTask: undefined,
                    apiPayload: undefined
                }; // Should not happen if task exists
                const project = get(projectAtom);
                const settings = project ? {
                    minutesPerDay: project.minutesPerDay,
                    minutesPerWeek: project.minutesPerWeek,
                    daysPerMonth: project.daysPerMonth
                } : undefined;
                // 1. Calculate the next state using the pure logic
                const nextTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$task$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTaskUpdate"])(initialTask, action.data, allTasks, settings);
                // 2. Generate the Undo/Redo patch
                const patch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$task$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatePatch"])(initialTask, nextTask);
                // 3. Update local state immediately
                nextTasks = {
                    ...allTasks,
                    [action.id]: nextTask
                };
                set(tasksAtom, nextTasks);
                // 4. Record history (PUSH_TO_HISTORY is now handled here for UPDATE_TASK)
                set(undoStackAtom, (prev)=>[
                        ...prev,
                        {
                            type: "UPDATE_PARENT",
                            patches: [
                                patch
                            ]
                        }
                    ]);
                set(redoStackAtom, []);
                // Return the nextTask and the API payload for the hook
                return {
                    nextTask,
                    apiPayload: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$task$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformForApi"])(action.data, nextTask)
                };
            }
        case "PUSH_TO_HISTORY":
            {
                // This case is now only for explicit PUSH_TO_HISTORY (e.g., from hierarchy changes)
                if (!action.patch) return {};
                set(undoStackAtom, (prev)=>[
                        ...prev,
                        {
                            type: "UPDATE_PARENT",
                            patches: [
                                action.patch
                            ]
                        }
                    ]);
                set(redoStackAtom, []);
                break;
            }
        case "UNDO":
            {
                set(projectCommandAtom, {
                    type: "UNDO"
                });
                break;
            }
        case "REDO":
            {
                set(projectCommandAtom, {
                    type: "REDO"
                });
                break;
            }
    }
    return {}; // Return empty object for non-UPDATE_TASK actions
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/hooks/project.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAIAgent",
    ()=>useAIAgent,
    "useCreateProject",
    ()=>useCreateProject,
    "useCreateTask",
    ()=>useCreateTask,
    "useDeleteProject",
    ()=>useDeleteProject,
    "useDeleteTasks",
    ()=>useDeleteTasks,
    "useExportTasks",
    ()=>useExportTasks,
    "useImportTasks",
    ()=>useImportTasks,
    "useIndentTask",
    ()=>useIndentTask,
    "useOutdentTask",
    ()=>useOutdentTask,
    "useProject",
    ()=>useProject,
    "useProjectCommands",
    ()=>useProjectCommands,
    "useProjects",
    ()=>useProjects,
    "useRedoTask",
    ()=>useRedoTask,
    "useReorderTask",
    ()=>useReorderTask,
    "useUndoTask",
    ()=>useUndoTask,
    "useUpdateProject",
    ()=>useUpdateProject,
    "useUpdateTask",
    ()=>useUpdateTask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.90.16_react@19.2.3/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.90.16_react@19.2.3/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.90.16_react@19.2.3/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/client/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/client/api-endpoints.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$11$2e$0$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-toastify@11.0.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/config/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jotai@2.16.1_@babel+core@7.28.5_@babel+template@7.27.2_@types+react@19.2.8_react@19.2.3/node_modules/jotai/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/store/state.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$task$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/task-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$modal$2f$modal$2e$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/modal/modal.context.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature(), _s13 = __turbopack_context__.k.signature(), _s14 = __turbopack_context__.k.signature(), _s15 = __turbopack_context__.k.signature(), _s16 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
function useProjects() {
    _s();
    const { data, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].project.all
    });
    return {
        projects: data ?? [],
        isLoading,
        error
    };
}
_s(useProjects, "Z3b93vmhJEnCPN4ovcxRGbOtffM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useProject(id) {
    _s1();
    const { data, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS,
            id
        ],
        queryFn: {
            "useProject.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].project.get(id)
        }["useProject.useQuery"],
        enabled: !!id
    });
    return {
        project: data,
        isLoading,
        error
    };
}
_s1(useProject, "Z3b93vmhJEnCPN4ovcxRGbOtffM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
;
function useCreateProject() {
    _s2();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { mutate, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].project.create,
        onSuccess: {
            "useCreateProject.useMutation": (data)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$11$2e$0$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Project created successfully!", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].toaster_options);
                if (data?.id) {
                    router.push(`/p/${data.id}`);
                }
            }
        }["useCreateProject.useMutation"],
        onSettled: {
            "useCreateProject.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS
                    ]
                });
            }
        }["useCreateProject.useMutation"]
    });
    return {
        createProject: mutate,
        isLoading: isPending,
        error
    };
}
_s2(useCreateProject, "f+4rKkD6R62jrlmkaU3naUbccVY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useUpdateProject() {
    _s3();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { mutate, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUpdateProject.useMutation": ({ id, data })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].project.update(id, data)
        }["useUpdateProject.useMutation"],
        onSuccess: {
            "useUpdateProject.useMutation": (updatedProject)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$11$2e$0$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Project updated successfully!", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].toaster_options);
                queryClient.setQueryData([
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS,
                    updatedProject.id
                ], updatedProject);
            }
        }["useUpdateProject.useMutation"],
        onSettled: {
            "useUpdateProject.useMutation": (_, __, { id })=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS,
                        id
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS
                    ]
                });
            }
        }["useUpdateProject.useMutation"]
    });
    return {
        updateProject: mutate,
        isLoading: isPending,
        error
    };
}
_s3(useUpdateProject, "Ox9U9fM8U5Ue20OYLk9D06tk4jY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteProject() {
    _s4();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { mutate, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].project.delete,
        onSuccess: {
            "useDeleteProject.useMutation": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$11$2e$0$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Project deleted successfully!", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].toaster_options);
            }
        }["useDeleteProject.useMutation"],
        onSettled: {
            "useDeleteProject.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS
                    ]
                });
            }
        }["useDeleteProject.useMutation"]
    });
    return {
        deleteProject: mutate,
        isLoading: isPending,
        error
    };
}
_s4(useDeleteProject, "Ox9U9fM8U5Ue20OYLk9D06tk4jY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useCreateTask() {
    _s5();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { projectId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const { mutate, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateTask.useMutation": (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].project.createTask(projectId, data)
        }["useCreateTask.useMutation"],
        onSuccess: {
            "useCreateTask.useMutation": ()=>{
            // Keep it silent for placeholder creation if name is missing
            }
        }["useCreateTask.useMutation"],
        onSettled: {
            "useCreateTask.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS,
                        projectId
                    ]
                });
            }
        }["useCreateTask.useMutation"]
    });
    return {
        createTask: mutate,
        isCreating: isPending,
        error
    };
}
_s5(useCreateTask, "a8fHBeIZT6P8H9+g5a52cz63oag=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteTasks() {
    _s6();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { projectId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const { mutateAsync, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useDeleteTasks.useMutation": (taskIds)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].project.deleteTasks(projectId, taskIds)
        }["useDeleteTasks.useMutation"],
        onSettled: {
            "useDeleteTasks.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS,
                        projectId
                    ]
                });
            }
        }["useDeleteTasks.useMutation"]
    });
    return {
        deleteTasks: mutateAsync,
        isDeleting: isPending
    };
}
_s6(useDeleteTasks, "p8rQ7uVVNOJxyNi/HkYEl5O0jmg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useUpdateTask() {
    _s7();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { projectId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const setSaveStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStatusAtom"]);
    const dispatchTaskAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taskActionAtom"]); // Use the simpler taskActionAtom
    const tasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtomValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tasksAtom"]);
    const { mutate, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUpdateTask.useMutation": async ({ taskId, data })=>{
                // 1. Tell the engine to update local UI and history
                const result = dispatchTaskAction({
                    type: "UPDATE_TASK",
                    id: taskId,
                    data
                });
                if (!result || !result.apiPayload) {
                    throw new Error("Failed to generate API payload from task action.");
                }
                const { nextTask, apiPayload } = result;
                setSaveStatus("saving");
                try {
                    // 2. Network work: POST for void nodes (negative ID), PUT for existing ones
                    if (taskId < 0) {
                        const newTask = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].project.createTask(projectId, {
                            ...apiPayload,
                            parentId: nextTask?.parentId,
                            sortOrder: nextTask?.sortOrder
                        });
                        setSaveStatus("saved");
                        setTimeout({
                            "useUpdateTask.useMutation": ()=>setSaveStatus("idle")
                        }["useUpdateTask.useMutation"], 2000);
                        return newTask;
                    } else {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].project.updateTask(projectId, taskId, apiPayload);
                        setSaveStatus("saved");
                        setTimeout({
                            "useUpdateTask.useMutation": ()=>setSaveStatus("idle")
                        }["useUpdateTask.useMutation"], 2000);
                        return nextTask;
                    }
                } catch (error) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$11$2e$0$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(taskId < 0 ? "Failed to create task." : "Failed to update task.", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].toaster_options);
                    dispatchTaskAction({
                        type: "UNDO"
                    });
                    setSaveStatus("idle");
                    throw error;
                } finally{
                    queryClient.invalidateQueries({
                        queryKey: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS,
                            projectId
                        ]
                    });
                }
            }
        }["useUpdateTask.useMutation"],
        onSuccess: {
            "useUpdateTask.useMutation": (updatedTask)=>{
            // No need to set query data here, as the atom already updated tasksAtom
            // queryClient.setQueryData([API_ENDPOINTS.PROJECTS, projectId], (old: Project | undefined) => {
            //   if (!old) return old;
            //   return { ...old, tasks: { ...old.tasks, [updatedTask.id]: updatedTask } };
            // });
            }
        }["useUpdateTask.useMutation"]
    });
    return {
        updateTask: mutate,
        isUpdating: isPending,
        error
    };
}
_s7(useUpdateTask, "w62DP+m9ZHnTAwYGcCguc1l5a68=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtomValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useImportTasks() {
    _s8();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const { mutate, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useImportTasks.useMutation": ({ projectId, file })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].project.importTasks(projectId, file)
        }["useImportTasks.useMutation"],
        onSuccess: {
            "useImportTasks.useMutation": (data)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$11$2e$0$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(data.message || `Successfully imported ${data.count} tasks!`, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].toaster_options);
            }
        }["useImportTasks.useMutation"],
        onError: {
            "useImportTasks.useMutation": (error)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$11$2e$0$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Something went wrong while importing tasks", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].toaster_options);
            }
        }["useImportTasks.useMutation"],
        onSettled: {
            "useImportTasks.useMutation": ()=>{
                const projectId = params?.projectId;
                if (projectId) {
                    queryClient.invalidateQueries({
                        queryKey: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS,
                            projectId
                        ]
                    });
                }
                queryClient.invalidateQueries({
                    queryKey: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS
                    ]
                });
            }
        }["useImportTasks.useMutation"]
    });
    return {
        importTasks: mutate,
        isImporting: isPending,
        error
    };
}
_s8(useImportTasks, "Yr1B1WHTKWiv/fSg/VSbuM/XXpc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useExportTasks() {
    _s9();
    const { mutate, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useExportTasks.useMutation": ({ projectId, format = 'csv' })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].project.exportTasks(projectId, format)
        }["useExportTasks.useMutation"],
        onSuccess: {
            "useExportTasks.useMutation": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$11$2e$0$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Tasks exported successfully!", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].toaster_options);
            }
        }["useExportTasks.useMutation"],
        onError: {
            "useExportTasks.useMutation": (error)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$11$2e$0$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Something went wrong while exporting tasks", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].toaster_options);
            }
        }["useExportTasks.useMutation"]
    });
    return {
        exportTasks: mutate,
        isExporting: isPending,
        error
    };
}
_s9(useExportTasks, "97d4QFvUhVFBsw4jCaXTWH6XJMo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useUndoTask() {
    _s10();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { projectId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const setSaveStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStatusAtom"]);
    const dispatchProjectCommand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectCommandAtom"]); // Use the project command atom
    const { mutate, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUndoTask.useMutation": async (projectId)=>{
                dispatchProjectCommand({
                    type: "UNDO"
                }); // Optimistically undo the local state
                return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].project.undoTask(projectId);
            }
        }["useUndoTask.useMutation"],
        onSuccess: {
            "useUndoTask.useMutation": ()=>{
                setSaveStatus("saved");
                setTimeout({
                    "useUndoTask.useMutation": ()=>setSaveStatus("idle")
                }["useUndoTask.useMutation"], 2000);
            }
        }["useUndoTask.useMutation"],
        onError: {
            "useUndoTask.useMutation": (error)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$11$2e$0$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error.response?.data?.error || "Failed to undo task", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].toaster_options);
                // If DB undo fails, re-apply the undone state locally (effectively a redo)
                dispatchProjectCommand({
                    type: "REDO"
                }); // Revert the optimistic undo
            }
        }["useUndoTask.useMutation"],
        onSettled: {
            "useUndoTask.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS,
                        projectId
                    ]
                });
            }
        }["useUndoTask.useMutation"]
    });
    return {
        undoTask: mutate,
        isUndoing: isPending,
        error
    };
}
_s10(useUndoTask, "7y3gPaTAF0nfzBJzBkZb9uHzfRQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useRedoTask() {
    _s11();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { projectId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const setSaveStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStatusAtom"]);
    const dispatchProjectCommand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectCommandAtom"]); // Use the project command atom
    const { mutate, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useRedoTask.useMutation": async (projectId)=>{
                dispatchProjectCommand({
                    type: "REDO"
                }); // Optimistically redo the local state
                return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].project.redoTask(projectId);
            }
        }["useRedoTask.useMutation"],
        onSuccess: {
            "useRedoTask.useMutation": ()=>{
                setSaveStatus("saved");
                setTimeout({
                    "useRedoTask.useMutation": ()=>setSaveStatus("idle")
                }["useRedoTask.useMutation"], 2000);
            }
        }["useRedoTask.useMutation"],
        onError: {
            "useRedoTask.useMutation": (error)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$11$2e$0$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error.response?.data?.error || "Failed to redo task", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].toaster_options);
                // If DB redo fails, re-apply the redoed state locally (effectively an undo)
                dispatchProjectCommand({
                    type: "UNDO"
                }); // Revert the optimistic redo
            }
        }["useRedoTask.useMutation"],
        onSettled: {
            "useRedoTask.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS,
                        projectId
                    ]
                });
            }
        }["useRedoTask.useMutation"]
    });
    return {
        redoTask: mutate,
        isRedoing: isPending,
        error
    };
}
_s11(useRedoTask, "7y3gPaTAF0nfzBJzBkZb9uHzfRQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useReorderTask() {
    _s12();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { projectId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const setSaveStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStatusAtom"]);
    const tasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtomValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tasksAtom"]);
    const { mutate, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useReorderTask.useMutation": ({ taskId, direction })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].project.reorderTask(projectId, taskId, direction)
        }["useReorderTask.useMutation"],
        onMutate: {
            "useReorderTask.useMutation": async ({ taskId, direction })=>{
                setSaveStatus("saving");
                // Cancel any outgoing refetches
                await queryClient.cancelQueries({
                    queryKey: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS,
                        projectId
                    ]
                });
                // Snapshot the previous value
                const previousProject = queryClient.getQueryData([
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS,
                    projectId
                ]);
                // Find the task and its sibling to swap with
                const currentTask = tasks[taskId];
                if (!currentTask) return {
                    previousProject
                };
                const siblings = Object.values(tasks).filter({
                    "useReorderTask.useMutation.siblings": (t)=>t.parentId === currentTask.parentId
                }["useReorderTask.useMutation.siblings"]).sort({
                    "useReorderTask.useMutation.siblings": (a, b)=>(a.sortOrder ?? 0) - (b.sortOrder ?? 0)
                }["useReorderTask.useMutation.siblings"]);
                const currentIndex = siblings.findIndex({
                    "useReorderTask.useMutation.currentIndex": (t)=>t.id === taskId
                }["useReorderTask.useMutation.currentIndex"]);
                const targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
                if (targetIndex < 0 || targetIndex >= siblings.length) {
                    return {
                        previousProject
                    };
                }
                const targetTask = siblings[targetIndex];
                if (!targetTask) return {
                    previousProject
                };
                // Optimistically swap sortOrder values
                queryClient.setQueryData([
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS,
                    projectId
                ], {
                    "useReorderTask.useMutation": (old)=>{
                        if (!old) return old;
                        const newTasks = {
                            ...old.tasks
                        };
                        if (newTasks && newTasks[currentTask.id] && newTasks[targetTask.id]) {
                            newTasks[currentTask.id] = {
                                ...newTasks[currentTask.id],
                                sortOrder: targetTask.sortOrder
                            };
                            newTasks[targetTask.id] = {
                                ...newTasks[targetTask.id],
                                sortOrder: currentTask.sortOrder
                            };
                        }
                        return {
                            ...old,
                            tasks: newTasks
                        };
                    }
                }["useReorderTask.useMutation"]);
                return {
                    previousProject
                };
            }
        }["useReorderTask.useMutation"],
        onSuccess: {
            "useReorderTask.useMutation": ()=>{
                setSaveStatus("saved");
                setTimeout({
                    "useReorderTask.useMutation": ()=>setSaveStatus("idle")
                }["useReorderTask.useMutation"], 2000);
            }
        }["useReorderTask.useMutation"],
        onError: {
            "useReorderTask.useMutation": (_err, _variables, context)=>{
                setSaveStatus("idle");
                if (context?.previousProject) {
                    queryClient.setQueryData([
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS,
                        projectId
                    ], context.previousProject);
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$11$2e$0$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to reorder task.", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].toaster_options);
            }
        }["useReorderTask.useMutation"],
        onSettled: {
            "useReorderTask.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS,
                        projectId
                    ]
                });
            }
        }["useReorderTask.useMutation"]
    });
    return {
        reorderTask: mutate,
        isReordering: isPending,
        error
    };
}
_s12(useReorderTask, "mykGDVBxJYDi9/M0yDgPxCaY+ps=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtomValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useIndentTask() {
    _s13();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { projectId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const setSaveStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStatusAtom"]);
    const { mutateAsync, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useIndentTask.useMutation": (taskId)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].project.indentTask(projectId, taskId)
        }["useIndentTask.useMutation"],
        onMutate: {
            "useIndentTask.useMutation": ()=>{
                setSaveStatus("saving");
            }
        }["useIndentTask.useMutation"],
        onSuccess: {
            "useIndentTask.useMutation": ()=>{
                setSaveStatus("saved");
                setTimeout({
                    "useIndentTask.useMutation": ()=>setSaveStatus("idle")
                }["useIndentTask.useMutation"], 2000);
            }
        }["useIndentTask.useMutation"],
        onError: {
            "useIndentTask.useMutation": (error)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$11$2e$0$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error.response?.data?.error || "Failed to indent task", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].toaster_options);
                setSaveStatus("idle");
            }
        }["useIndentTask.useMutation"],
        onSettled: {
            "useIndentTask.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS,
                        projectId
                    ]
                });
            }
        }["useIndentTask.useMutation"]
    });
    return {
        indentTask: mutateAsync,
        isIndenting: isPending,
        error
    };
}
_s13(useIndentTask, "D/yPA293yZLHrjqF0T4Gwmm2jEs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useOutdentTask() {
    _s14();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { projectId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const setSaveStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStatusAtom"]);
    const { mutateAsync, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useOutdentTask.useMutation": (taskId)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].project.outdentTask(projectId, taskId)
        }["useOutdentTask.useMutation"],
        onMutate: {
            "useOutdentTask.useMutation": ()=>{
                setSaveStatus("saving");
            }
        }["useOutdentTask.useMutation"],
        onSuccess: {
            "useOutdentTask.useMutation": ()=>{
                setSaveStatus("saved");
                setTimeout({
                    "useOutdentTask.useMutation": ()=>setSaveStatus("idle")
                }["useOutdentTask.useMutation"], 2000);
            }
        }["useOutdentTask.useMutation"],
        onError: {
            "useOutdentTask.useMutation": (error)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$11$2e$0$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error.response?.data?.error || "Failed to outdent task", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].toaster_options);
                setSaveStatus("idle");
            }
        }["useOutdentTask.useMutation"],
        onSettled: {
            "useOutdentTask.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS,
                        projectId
                    ]
                });
            }
        }["useOutdentTask.useMutation"]
    });
    return {
        outdentTask: mutateAsync,
        isOutdenting: isPending,
        error
    };
}
_s14(useOutdentTask, "D/yPA293yZLHrjqF0T4Gwmm2jEs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useProjectCommands() {
    _s15();
    const { createTask } = useCreateTask();
    const { deleteTasks } = useDeleteTasks();
    const { updateTask } = useUpdateTask();
    const { reorderTask } = useReorderTask();
    const { indentTask } = useIndentTask();
    const { outdentTask } = useOutdentTask();
    const { undoTask } = useUndoTask();
    const { redoTask } = useRedoTask();
    const tasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtomValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tasksAtom"]);
    const selectedTaskIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtomValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedTaskIdsAtom"]);
    const setLeadTaskId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leadTaskIdAtom"]);
    const setSelectedTaskIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedTaskIdsAtom"]);
    const dispatchProjectCommand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectCommandAtom"]); // Dispatch to the new atom
    const undoStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtomValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["undoStackAtom"]); // To check canUndo/canRedo
    const redoStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtomValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redoStackAtom"]); // To check canUndo/canRedo
    const { projectId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const { openModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$modal$2f$modal$2e$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalAction"])();
    const clearSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProjectCommands.useCallback[clearSelection]": ()=>{
            setSelectedTaskIds([]);
            setLeadTaskId(null);
        }
    }["useProjectCommands.useCallback[clearSelection]"], [
        setSelectedTaskIds,
        setLeadTaskId
    ]);
    const insertTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProjectCommands.useCallback[insertTask]": ()=>{
            if (selectedTaskIds.length > 1) return;
            let parentId = null;
            let sortOrder = undefined;
            if (selectedTaskIds.length === 1) {
                const selectedTaskId = Number(selectedTaskIds[0]);
                const selectedTask = tasks[selectedTaskId];
                if (selectedTask) {
                    parentId = selectedTask.parentId ?? null;
                    // Implementation of "Insert Before": Use the current task's sortOrder
                    sortOrder = selectedTask.sortOrder ?? 0;
                }
            }
            // Optimistically update local state
            dispatchProjectCommand({
                type: "CREATE_TASK",
                payload: {
                    parentId,
                    sortOrder
                }
            });
            createTask({
                parentId,
                sortOrder
            });
        }
    }["useProjectCommands.useCallback[insertTask]"], [
        selectedTaskIds,
        tasks,
        dispatchProjectCommand,
        createTask
    ]);
    const addTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProjectCommands.useCallback[addTask]": ()=>{
            // Optimistically update local state at the end of root level
            dispatchProjectCommand({
                type: "CREATE_TASK",
                payload: {
                    parentId: null,
                    sortOrder: undefined
                }
            });
            createTask({
                parentId: null,
                sortOrder: undefined
            });
        }
    }["useProjectCommands.useCallback[addTask]"], [
        dispatchProjectCommand,
        createTask
    ]);
    // Pure logic moved to task-utils.ts, called directly in canMove functions or within the action atom
    const canMoveUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProjectCommands.useCallback[canMoveUp]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$task$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canMoveTaskUp"])(tasks, selectedTaskIds);
        }
    }["useProjectCommands.useCallback[canMoveUp]"], [
        selectedTaskIds,
        tasks
    ]);
    const canMoveDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProjectCommands.useCallback[canMoveDown]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$task$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canMoveTaskDown"])(tasks, selectedTaskIds);
        }
    }["useProjectCommands.useCallback[canMoveDown]"], [
        selectedTaskIds,
        tasks
    ]);
    const moveTaskUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProjectCommands.useCallback[moveTaskUp]": ()=>{
            if (selectedTaskIds.length !== 1 || !canMoveUp()) return;
            const selectedTaskId = Number(selectedTaskIds[0]);
            reorderTask({
                taskId: selectedTaskId,
                direction: "up"
            });
        }
    }["useProjectCommands.useCallback[moveTaskUp]"], [
        selectedTaskIds,
        canMoveUp,
        reorderTask
    ]);
    const moveTaskDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProjectCommands.useCallback[moveTaskDown]": ()=>{
            if (selectedTaskIds.length !== 1 || !canMoveDown()) return;
            const selectedTaskId = Number(selectedTaskIds[0]);
            reorderTask({
                taskId: selectedTaskId,
                direction: "down"
            });
        }
    }["useProjectCommands.useCallback[moveTaskDown]"], [
        selectedTaskIds,
        canMoveDown,
        reorderTask
    ]);
    const canMoveRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProjectCommands.useCallback[canMoveRight]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$task$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canMoveTaskRight"])(tasks, selectedTaskIds);
        }
    }["useProjectCommands.useCallback[canMoveRight]"], [
        selectedTaskIds,
        tasks
    ]);
    const canMoveLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProjectCommands.useCallback[canMoveLeft]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$task$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canMoveTaskLeft"])(tasks, selectedTaskIds);
        }
    }["useProjectCommands.useCallback[canMoveLeft]"], [
        selectedTaskIds,
        tasks
    ]);
    const moveTaskRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProjectCommands.useCallback[moveTaskRight]": async ()=>{
            if (!canMoveRight() || selectedTaskIds.length === 0) return;
            // Dispatch to the projectCommandAtom for optimistic local state update
            dispatchProjectCommand({
                type: "MOVE_RIGHT",
                ids: selectedTaskIds
            });
            // Filter to only indent tasks whose parent is not selected
            // to preserve internal hierarchy of the selection
            const tasksToIndent = selectedTaskIds.filter({
                "useProjectCommands.useCallback[moveTaskRight].tasksToIndent": (id)=>{
                    const task = tasks[Number(id)];
                    return !task?.parentId || !selectedTaskIds.includes(String(task.parentId));
                }
            }["useProjectCommands.useCallback[moveTaskRight].tasksToIndent"]);
            // Indent sequentially to avoid race conditions and nesting bugs
            // We use mutateAsync to ensure each operation completes before the next starts
            for (const id of tasksToIndent){
                try {
                    await indentTask(Number(id));
                } catch (err) {
                    console.error(`Failed to indent task ${id}:`, err);
                }
            }
        }
    }["useProjectCommands.useCallback[moveTaskRight]"], [
        selectedTaskIds,
        tasks,
        dispatchProjectCommand,
        canMoveRight,
        indentTask
    ]);
    const moveTaskLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProjectCommands.useCallback[moveTaskLeft]": async ()=>{
            if (!canMoveLeft() || selectedTaskIds.length === 0) return;
            // Dispatch to the projectCommandAtom for optimistic local state update
            dispatchProjectCommand({
                type: "MOVE_LEFT",
                ids: selectedTaskIds
            });
            // Filter to only outdent tasks whose parent is not selected
            // to preserve internal hierarchy of the selection
            const tasksToOutdent = selectedTaskIds.filter({
                "useProjectCommands.useCallback[moveTaskLeft].tasksToOutdent": (id)=>{
                    const task = tasks[Number(id)];
                    return !task?.parentId || !selectedTaskIds.includes(String(task.parentId));
                }
            }["useProjectCommands.useCallback[moveTaskLeft].tasksToOutdent"]);
            // Outdent sequentially to avoid race conditions and hierarchy bugs
            for (const id of tasksToOutdent){
                try {
                    await outdentTask(Number(id));
                } catch (err) {
                    console.error(`Failed to outdent task ${id}:`, err);
                }
            }
        }
    }["useProjectCommands.useCallback[moveTaskLeft]"], [
        selectedTaskIds,
        tasks,
        dispatchProjectCommand,
        canMoveLeft,
        outdentTask
    ]);
    const canUndo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProjectCommands.useCallback[canUndo]": ()=>{
            return undoStack.length > 0;
        }
    }["useProjectCommands.useCallback[canUndo]"], [
        undoStack
    ]);
    const undo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProjectCommands.useCallback[undo]": ()=>{
            if (projectId) {
                undoTask(projectId);
            }
        }
    }["useProjectCommands.useCallback[undo]"], [
        undoTask,
        projectId
    ]);
    const canRedo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProjectCommands.useCallback[canRedo]": ()=>{
            return redoStack.length > 0;
        }
    }["useProjectCommands.useCallback[canRedo]"], [
        redoStack
    ]);
    const redo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProjectCommands.useCallback[redo]": ()=>{
            if (projectId) {
                redoTask(projectId);
            }
        }
    }["useProjectCommands.useCallback[redo]"], [
        redoTask,
        projectId
    ]);
    const deleteSelectedTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProjectCommands.useCallback[deleteSelectedTasks]": async ()=>{
            if (selectedTaskIds.length === 0) return;
            openModal("CONFIRM_DELETE_TASK");
        }
    }["useProjectCommands.useCallback[deleteSelectedTasks]"], [
        selectedTaskIds,
        openModal
    ]);
    const canDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProjectCommands.useCallback[canDelete]": ()=>{
            return selectedTaskIds.length > 0;
        }
    }["useProjectCommands.useCallback[canDelete]"], [
        selectedTaskIds
    ]);
    return {
        insertTask,
        addTask,
        moveTaskRight,
        moveTaskLeft,
        canMoveRight,
        canMoveLeft,
        moveTaskUp,
        moveTaskDown,
        canMoveUp,
        canMoveDown,
        canUndo,
        undo,
        canRedo,
        redo,
        deleteSelectedTasks,
        canDelete
    };
}
_s15(useProjectCommands, "GqctD7RPqU16H1OLHus715CvRhY=", false, function() {
    return [
        useCreateTask,
        useDeleteTasks,
        useUpdateTask,
        useReorderTask,
        useIndentTask,
        useOutdentTask,
        useUndoTask,
        useRedoTask,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtomValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtomValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtomValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtomValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$modal$2f$modal$2e$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalAction"]
    ];
});
function useAIAgent() {
    _s16();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { projectId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectCommandAtom"]);
    const setChangeGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiChangeGroupsAtom"]);
    const changeGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtomValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiChangeGroupsAtom"]);
    const tasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtomValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tasksAtom"]);
    const setSaveStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$store$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStatusAtom"]);
    const hasChanges = changeGroups.length > 0;
    const groupSummaries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAIAgent.useMemo[groupSummaries]": ()=>{
            if (!hasChanges) return [];
            const flattenedTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$task$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildHierarchy"])(tasks);
            return changeGroups.map({
                "useAIAgent.useMemo[groupSummaries]": (group)=>{
                    const rowIndices = Object.keys(group.taskIdFields).map({
                        "useAIAgent.useMemo[groupSummaries].rowIndices": (taskIdStr)=>{
                            const taskId = Number(taskIdStr);
                            return flattenedTasks.findIndex({
                                "useAIAgent.useMemo[groupSummaries].rowIndices": (t)=>t.id === taskId
                            }["useAIAgent.useMemo[groupSummaries].rowIndices"]) + 1;
                        }
                    }["useAIAgent.useMemo[groupSummaries].rowIndices"]).filter({
                        "useAIAgent.useMemo[groupSummaries].rowIndices": (idx)=>idx > 0
                    }["useAIAgent.useMemo[groupSummaries].rowIndices"]).sort({
                        "useAIAgent.useMemo[groupSummaries].rowIndices": (a, b)=>a - b
                    }["useAIAgent.useMemo[groupSummaries].rowIndices"]);
                    if (rowIndices.length === 0) return "New tasks pending";
                    return `Rows [${rowIndices.join(",")}]`;
                }
            }["useAIAgent.useMemo[groupSummaries]"]);
        }
    }["useAIAgent.useMemo[groupSummaries]"], [
        changeGroups,
        tasks,
        hasChanges
    ]);
    const changesSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAIAgent.useMemo[changesSummary]": ()=>{
            if (!hasChanges) return "";
            const groupCount = changeGroups.length;
            if (groupCount === 1) return groupSummaries[0];
            return `${groupCount} change set${groupCount > 1 ? "s" : ""} pending`;
        }
    }["useAIAgent.useMemo[changesSummary]"], [
        changeGroups.length,
        hasChanges,
        groupSummaries
    ]);
    // Mutations for keeping/undoing changes
    const { mutate: keepMutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        onMutate: {
            "useAIAgent.useMutation": ()=>{
                setSaveStatus("saving");
            }
        }["useAIAgent.useMutation"],
        mutationFn: {
            "useAIAgent.useMutation": (changeSetId)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].project.keepChanges(projectId, changeSetId)
        }["useAIAgent.useMutation"],
        onSuccess: {
            "useAIAgent.useMutation": (_, changeSetId)=>{
                setSaveStatus("saved");
                setTimeout({
                    "useAIAgent.useMutation": ()=>setSaveStatus("idle")
                }["useAIAgent.useMutation"], 2000);
                if (changeSetId) {
                    setChangeGroups({
                        "useAIAgent.useMutation": (prev)=>prev.filter({
                                "useAIAgent.useMutation": (g)=>g.id !== changeSetId
                            }["useAIAgent.useMutation"])
                    }["useAIAgent.useMutation"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$11$2e$0$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Change group kept", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].toaster_options);
                } else {
                    setChangeGroups([]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$11$2e$0$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("All changes kept", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].toaster_options);
                }
            }
        }["useAIAgent.useMutation"],
        onError: {
            "useAIAgent.useMutation": ()=>{
                setSaveStatus("idle");
            }
        }["useAIAgent.useMutation"],
        onSettled: {
            "useAIAgent.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS,
                        projectId
                    ]
                });
            }
        }["useAIAgent.useMutation"]
    });
    const { mutate: undoMutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        onMutate: {
            "useAIAgent.useMutation": ()=>{
                setSaveStatus("saving");
            }
        }["useAIAgent.useMutation"],
        mutationFn: {
            "useAIAgent.useMutation": (changeSetId)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].project.undoChanges(projectId, changeSetId)
        }["useAIAgent.useMutation"],
        onSuccess: {
            "useAIAgent.useMutation": (_, changeSetId)=>{
                setSaveStatus("saved");
                setTimeout({
                    "useAIAgent.useMutation": ()=>setSaveStatus("idle")
                }["useAIAgent.useMutation"], 2000);
                if (changeSetId) {
                    // Find the group and its patches to revert locally?
                    // Actually, it's easier to just invalidate and let the DB state win.
                    // But for better UX, we could use the existing local undo logic.
                    // However, undoing a middle-stack change in the DB and then syncing is safest.
                    setChangeGroups({
                        "useAIAgent.useMutation": (prev)=>prev.filter({
                                "useAIAgent.useMutation": (g)=>g.id !== changeSetId
                            }["useAIAgent.useMutation"])
                    }["useAIAgent.useMutation"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$11$2e$0$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Change group undone", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].toaster_options);
                } else {
                    setChangeGroups([]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$11$2e$0$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("All changes undone", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].toaster_options);
                }
            }
        }["useAIAgent.useMutation"],
        onError: {
            "useAIAgent.useMutation": ()=>{
                setSaveStatus("idle");
            }
        }["useAIAgent.useMutation"],
        onSettled: {
            "useAIAgent.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$client$2f$api$2d$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].PROJECTS,
                        projectId
                    ]
                });
            }
        }["useAIAgent.useMutation"]
    });
    const simulateUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAIAgent.useCallback[simulateUpdate]": ()=>{
            // This is still just a simulation for now, but in reality,
            // the agent would call the API and the hook would re-fetch.
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$toastify$40$11$2e$0$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Agent is processing...", __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].toaster_options);
        }
    }["useAIAgent.useCallback[simulateUpdate]"], []);
    const keepChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAIAgent.useCallback[keepChanges]": ()=>{
            keepMutate(undefined);
        }
    }["useAIAgent.useCallback[keepChanges]"], [
        keepMutate
    ]);
    const undoChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAIAgent.useCallback[undoChanges]": ()=>{
            undoMutate(undefined);
        }
    }["useAIAgent.useCallback[undoChanges]"], [
        undoMutate
    ]);
    const keepGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAIAgent.useCallback[keepGroup]": (groupId)=>{
            keepMutate(groupId);
        }
    }["useAIAgent.useCallback[keepGroup]"], [
        keepMutate
    ]);
    const undoGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAIAgent.useCallback[undoGroup]": (groupId)=>{
            undoMutate(groupId);
        }
    }["useAIAgent.useCallback[undoGroup]"], [
        undoMutate
    ]);
    return {
        simulateUpdate,
        keepChanges,
        undoChanges,
        keepGroup,
        undoGroup,
        hasChanges,
        changesSummary,
        groupCount: changeGroups.length,
        groups: changeGroups.map((g, i)=>({
                id: g.id,
                summary: groupSummaries[i]
            }))
    };
}
_s16(useAIAgent, "XfpF17togggLiMJatQV+QHN59d0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtomValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtomValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$16$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$babel$2b$template$40$7$2e$27$2e$2_$40$types$2b$react$40$19$2e$2$2e$8_react$40$19$2e$2$2e$3$2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAtom"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/icons/grid-dots-icon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GridDotsIcon",
    ()=>GridDotsIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const GridDotsIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        stroke: "currentColor",
        fill: "none",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/icons/grid-dots-icon.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/icons/grid-dots-icon.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/icons/grid-dots-icon.tsx",
                lineNumber: 14,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/icons/grid-dots-icon.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/icons/grid-dots-icon.tsx",
                lineNumber: 16,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/icons/grid-dots-icon.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/icons/grid-dots-icon.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/icons/grid-dots-icon.tsx",
                lineNumber: 19,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/icons/grid-dots-icon.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/icons/grid-dots-icon.tsx",
        lineNumber: 2,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = GridDotsIcon;
var _c;
__turbopack_context__.k.register(_c, "GridDotsIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/layout/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$icons$2f$grid$2d$dots$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/icons/grid-dots-icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Header = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isHomePage = pathname === "/";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-background text-foreground ${isHomePage ? "" : "border-b border-border"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "h-16 px-4 flex justify-between items-center",
            children: !isHomePage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$icons$2f$grid$2d$dots$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridDotsIcon"], {
                                className: "w-6 h-6 text-zinc-900 dark:text-zinc-100"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/layout/header.tsx",
                                lineNumber: 22,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/layout/header.tsx",
                            lineNumber: 21,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/layout/header.tsx",
                        lineNumber: 20,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-semibold leading-none font-[var(--font-montserrat)]",
                            children: "Project Editor"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/layout/header.tsx",
                            lineNumber: 26,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/layout/header.tsx",
                        lineNumber: 25,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/layout/header.tsx",
                lineNumber: 19,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/components/layout/header.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/components/layout/header.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/app/(home)/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/hooks/project.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/layout/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$icons$2f$grid$2d$dots$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/icons/grid-dots-icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$modal$2f$modal$2e$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/modal/modal.context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Page() {
    _s();
    const { createProject } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateProject"])();
    const { projects, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjects"])();
    const { openModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$modal$2f$modal$2e$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalAction"])();
    const handleNewProject = async ()=>{
        createProject({});
    };
    const handleImportProject = ()=>{
        openModal("IMPORT_PROJECT");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-background text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/web/app/(home)/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col items-center justify-center font-sans",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-1 flex flex-col items-center justify-center w-full max-w-3xl p-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$icons$2f$grid$2d$dots$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridDotsIcon"], {
                                    className: "w-8 h-8 text-zinc-900 dark:text-zinc-100"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/(home)/page.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl font-semibold tracking-tight",
                                    children: "ProjectEditor.io"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/(home)/page.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/app/(home)/page.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/(home)/page.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/app/(home)/page.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/app/(home)/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/app/(home)/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(Page, "qFgDJtF/XAPQt/5WcFnAXlWZkK4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateProject"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjects"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$modal$2f$modal$2e$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalAction"]
    ];
});
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_0e1a25a2._.js.map