declare global {
    namespace NodeJS {
        interface ProcessEnv {
            // Server-side environment variables should be named using uppercase
            // letters only, while camelCase naming convention should be used
            // for variables shared by both the client-side and server-side.
            appName: string;
            appLogo: string;
            appThemeColor: string;
            appSummary: string;
            exampleInput: string;

            OPENAI_API_KEY: "prj_Ku0gNzIDeFfk39b33TAajtE48aJu";
            OPENAI_API_BASE_URL: "https://api.openai.com";
            SYSTEM_MESSAGE: "hello";
            MESSAGE_TEMPLATE: string;
        }
    }
}

export {}
