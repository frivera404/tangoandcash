declare global {
    namespace NodeJS {
        interface ProcessEnv {
            // Server-side environment variables should be named using uppercase
            // letters only, while camelCase naming convention should be used
            // for variables shared by both the client-side and server-side.
            appName: "Agent Alex";
            appLogo: string;
            appThemeColor: "#22c55e";
            appSummary: "THIS APPLICATION IS DESIGNED TO HELP USERS EFFICIENTLY MANAGE AND AUTOMATE THEIR TASKS. WITH ADVANCED FEATURES LIKE AI-DRIVEN ASSISTANCE, CUSTOMIZABLE WORKFLOWS, AND REAL-TIME NOTIFICATIONS, USERS CAN STREAMLINE THEIR DAILY OPERATIONS AND FOCUS ON WHAT MATTERS MOST.";
            exampleInput: "Please enter your query here.";

            OPENAI_API_KEY: "prj_Ku0gNzIDeFfk39b33TAajtE48aJu";
            OPENAI_API_BASE_URL: "https://api.openai.com";
            SYSTEM_MESSAGE: "Welcome to the Marketing Command Center! As an Agent Supervisor, your role is crucial. You are responsible for instructing agents in all marketing tasks, lead generation and collection, API connections, app building, and specializing in optimizing agent workflows.If you need further assistance, don't hesitate to reach out—our support team is here to help you every step of the way.";,
            MESSAGE_TEMPLATE: "TELL ME, HOW MAY I HELP? I WANTED TO DISCUSS API, ENDPOINTS, AFFILIATE MARKETING, CONTENT CREATION, CREATING AGENT DIRECTIONS BY EMAIL, TEXT, VOICE MESSAGING, AFFILIATE SELECTIONS, ETC. COULD YOU PLEASE PROVIDE YOUR INSIGHTS ON THIS MATTER? ADDITIONALLY, I WOULD APPRECIATE ANY RECOMMENDATIONS YOU HAVE FOR IMPROVING CONTENT AND AUTOMATION THROUGH CHEAT LAYER, CONVERSION RATES, TRAFFIC, ETC. THANK YOU FOR YOUR CONTINUOUS SUPPORT AND GUIDANCE. BEST REGARDS, MARKETER AGENT.";
            
        }
    }
}

export {}
