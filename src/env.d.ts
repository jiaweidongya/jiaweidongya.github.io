interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_BASE_API: string;
  readonly VITE_APP_TOKEN_TIME: number;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
