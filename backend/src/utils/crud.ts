import { PickType } from '@nestjs/mapped-types'
import { validate } from 'class-validator'
import { ForbiddenException } from '@nestjs/common'
import { IsNotEmpty } from 'class-validator'

export class UpdateFieldDto {
  @IsNotEmpty()
  field: never

  value: never
}

export async function validateField(modelDto, field: never, value: never) {
  const klass = PickType(modelDto, [field])
  const dto = new klass()
  dto[field] = value
  const errors = await validate(dto, { whitelist: true, forbidNonWhitelisted: true })
  if (errors.length > 0) {
    throw new ForbiddenException(Object.values(errors[0].constraints)[0], 'Invalid data')
  }
}
