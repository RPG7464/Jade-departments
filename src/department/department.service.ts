import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel(Department.name)
    private departmentModel = Model<Department>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    try {
      return await this.departmentModel.create(createDepartmentDto);
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    return await this.departmentModel.find();
  }

  async findOne(id: string) {
    try {
      const department = await this.departmentModel.findById(id).exec();
      if (!department) {
        throw new NotFoundException(
          `The department with id: ${id} was not found`,
        );
      }
      return department;
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    try {
      const department = await this.departmentModel.findById(id).exec();
      if (!department) {
        throw new NotFoundException(
          `The department with id: ${id} was not found`,
        );
      }

      return await this.departmentModel
        .findByIdAndUpdate(id, updateDepartmentDto, { new: true })
        .exec();
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string) {
    try {
      const department = await this.departmentModel.findById(id).exec();

      if (!department) {
        throw new NotFoundException(
          `The department with id:${id} was not found`,
        );
      }

      return await this.departmentModel.findByIdAndRemove(id).exec();
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
