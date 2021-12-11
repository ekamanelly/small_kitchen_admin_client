import api from '../../utils/api'

export default async function writeLog({
  message,
  applicationId,
}: {
  message: string
  applicationId: string
}) {
  try {
    const res = await api.post(`/applications/logs/${applicationId}`, { message })
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
