declare namespace Types {
  type AnyObj = {
    [propName: string]: any
  }
}

declare interface Menu {
  parent: number
  name: string
  id: number
  url: string
  icon?: string
  children?: Menu[]
}
