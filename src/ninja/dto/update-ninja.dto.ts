import {PartialType} from '@nestjs/mapped-types'
import {createNinjaDto} from './create-ninja.dto'

export class updateNinjaDto extends PartialType(createNinjaDto){}