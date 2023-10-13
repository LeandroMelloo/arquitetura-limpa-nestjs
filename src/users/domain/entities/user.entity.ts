export type UserProps = {
  name: string
  email: string
  password: string
  createdAt?: Date // ? -> Opcional
}

export class UserEntity {
  constructor(public readonly props: UserProps) {
    this.props.createdAt = this.props.createdAt ?? new Date()
  }
}
