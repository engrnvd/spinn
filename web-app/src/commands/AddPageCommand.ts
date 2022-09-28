import { useAppStore } from '../stores/app.store'
import { Command } from './Command'

export class AddPageCommand extends Command {
  description = 'Add new page'

  run() {
    const { page } = this.payload
    const app = useAppStore()

    app.sitemap.pages.push(page)
    super.run()
  }

  undo() {
    const app = useAppStore()
    const { page } = this.payload
    app.sitemap.pages.splice(app.sitemap.pages.indexOf(page), 1)
    super.undo()
  }
}
