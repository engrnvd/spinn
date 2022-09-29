import { SitemapBlock } from '../classes/SitemapBlock'
import { SitemapPage } from '../classes/SitemapPage'
import { Command } from './Command'

export class AddBlockCommand extends Command {
  description = 'Add new block'

  run() {
    const page: SitemapPage = this.payload.page
    const block: SitemapBlock = this.payload.block

    page.blocks.push(block)

    super.run()
  }

  undo() {
    const page: SitemapPage = this.payload.page
    const block: SitemapBlock = this.payload.block

    page.blocks.splice(page.blocks.indexOf(block), 1)

    super.undo()
  }
}
