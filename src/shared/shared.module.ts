import { Module } from '@nestjs/common';
import { AuthGuard } from './guard/auth.guard';
import { RolesGuard } from './guard/role.guard';

@Module({
  providers: [AuthGuard, RolesGuard],
  exports: [AuthGuard, RolesGuard],
})
export class SharedModule {}
