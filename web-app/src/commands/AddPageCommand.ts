import { Command } from './Command'

export class AddPageCommand extends Command {
  description = 'Add new page'

  run() {
    const { page } = this.payload

    let pages = page.parent?.children
    if (!pages) {
      console.log('Error: cant add page: ', page)
      return
    }

    pages.splice(page.index || pages.indexOf(page), 0, page)

    super.run()
  }

  undo() {
    const { page } = this.payload

    let pages = page.parent?.children
    if (!pages) {
      console.log('Error: cant undo add page: ', page)
      return
    }

    pages.splice(pages.indexOf(page), 1)

    super.undo()
  }
}
