import { ApmLogger } from '../utils/Logger'

export class HasLogger {
  public readonly logLabel: string

  get logger() {
    return new ApmLogger(this.logLabel)
  }
}
