import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `Powered by OpenAI
- 在您开始使用ChatGPT镜像站之前，我们需要你提供一个API Key，API Key来自OpenAI。  

- 你可以使用OpenAI账号获取API Key，[查询API Key链接](https://platform.openai.com/account/api-keys)  

- 点右下角⚙输入你的API key。  

- API Key仅缓存在浏览器中，镜像站不保存API Key，请妥善保管好你的API Key，以免影响使用。  

- 如需**专属镜像站和机器人**请联系我们: [微信](https://pic.hhao.cc/imgs/2023/03/6c4f8dab0ac56e62.jpg) | [邮箱](mailto:wwang.pw@gmail.com) | [商店](https://enna.eu.org)  

- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] 搜索 Prompt 预设。点击输入框滚动到底部。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
