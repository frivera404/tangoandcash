
declare namespace NodeJS {
  interface ProcessEnv {
    appName: "tango_and_cash"; // app name as string
    appLogo: "Alex Agent.png"; // logo as string
    appThemeColor: "#22c55e"; // theme color as string (hex code)
    appSummary: "THIS APPLICATION IS DESIGNED TO HELP USERS EFFICIENTLY MANAGE AND AUTOMATE THEIR TASKS. WITH ADVANCED FEATURES LIKE AI-DRIVEN ASSISTANCE, CUSTOMIZABLE WORKFLOWS, AND REAL-TIME NOTIFICATIONS, USERS CAN STREAMLINE THEIR DAILY OPERATIONS AND FOCUS ON WHAT MATTERS MOST."; // app summary as string
    exampleInput: "Please enter your query here."; // example input as string
    OPENAI_API_KEY: "sk-U7KqWJD_hRgfobyuzRCBhClONupWt27T_A5l1A-RtaT3BlbkFJyiet7i8KrDtErujKiu_qGd9LyO9VuJX81QEtfpBCwA"; // openai api key
    OPENAI_API_BASE_URL: "https://chatgpt.com/"; // openai api base url
     SYSTEM_MESSAGE: "Welcome to the Marketing Command Center! As an Agent Supervisor, your role is crucial. You are responsible for instructing agents in all marketing tasks, lead generation and collection, API connections, app building, and specializing in optimizing agent workflows.If you need further assistance, don't hesitate to reach out—our support team is here to help you every step of the way.";
    MESSAGE_TEMPLATE: "TELL ME, HOW MAY I HELP? I WANTED TO DISCUSS API, ENDPOINTS, AFFILIATE MARKETING, CONTENT CREATION, CREATING AGENT DIRECTIONS BY EMAIL, TEXT, VOICE MESSAGING, AFFILIATE SELECTIONS, ETC. COULD YOU PLEASE PROVIDE YOUR INSIGHTS ON THIS MATTER? ADDITIONALLY, I WOULD APPRECIATE ANY RECOMMENDATIONS YOU HAVE FOR IMPROVING CONTENT AND AUTOMATION THROUGH CHEAT LAYER, CONVERSION RATES, TRAFFIC, ETC. THANK YOU FOR YOUR CONTINUOUS SUPPORT AND GUIDANCE. BEST REGARDS, MARKETER AGENT.";
  }
}
