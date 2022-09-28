import { SitemapBlock } from '../classes/SitemapBlock'
import { SitemapPage } from '../classes/SitemapPage'
import { SitemapSection } from '../classes/SitemapSection'
import { Command } from './Command'

export class EditItemNameCommand extends Command {
  description = 'Edit item name'
  oldName = ''

  label(): string {
    return `Edit ${this.item._type} name`
  }

  get item(): SitemapPage | SitemapBlock | SitemapSection {
    return this.payload.item
  }

  run() {
    this.oldName = this.item.name
    this.item.name = this.payload.name

    super.run()
  }

  undo() {
    this.item.name = this.oldName

    super.undo()
  }
}
