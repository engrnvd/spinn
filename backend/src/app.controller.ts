import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  constructor() {
  }

  @Get()
  getHello(): string {
    return `
     <div style="background-color: #f4f4f4; width: 100vw; height: 100vh; align-items: center; justify-content: center; display: flex; position:fixed; left: 0; top: 0;">
        <div style="box-shadow: 1px 1px 5px rgba(111,111,111,0.25); padding: 3em; border-radius: 0.5em; background-color: #fff;">
            Made by 
            <a target="_blank" href="https://appmakers.pk/naveed/" style="text-decoration: none; color: crimson">
              Naveed ul Hassan Malik
            </a>
        </div>
    </div>
    `
  }
}
