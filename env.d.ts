// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    appName: string;
    appLogo: string;
    appThemeColor: string;
    appSummary: string;
    exampleInput: string;
    OPENAI_API_KEY: string;
    OPENAI_API_BASE_URL: string;
    SYSTEM_MESSAGE: string;
    MESSAGE_TEMPLATE: string;
  }
}
