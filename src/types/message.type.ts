export default interface IMessageData {
  id?: any | null,
  content: string,
  source: string,
  published?: boolean,
  category: string,
  createdAt: string
}