import path from 'path'

export const getAppDataPath = () => {
  return path.join(process.cwd(), 'app-data')
}

export const getTemplatesPath = () => {
  return path.join(process.cwd(), 'templates')
}

export const getTemplatePath = (templateName) => {
  return path.join(getTemplatesPath(), `${templateName}.html`)
}

export const getAssetsPath = () => {
  return path.join(process.cwd(), 'assets')
}
