import { PartialType } from '@nestjs/mapped-types';

class _UpdateProjectDto {
  name: string;

  description?: string;

  started_at?: Date;

  cancelled_at?: Date;

  forecasted_at?: Date;

  finished_at?: Date;
}

export class UpdateProjectDto extends PartialType(_UpdateProjectDto) {}
