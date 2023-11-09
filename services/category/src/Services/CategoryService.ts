import Category, {ICategory} from "../Models/Category";
import generateSlug from "../Helper/Slug";
import {ICreateCategoryRequest} from "../Requests/CreateCategoryRequest";
import {IUpdateCategoryRequest} from "../Requests/UpdateCategoryRequest";
import {IDeleteCategoryRequest} from "../Requests/DeleteCategoryRequest";

export interface ICategoryService {
    all: () => any;
    create: (data: ICreateCategoryRequest) => any;
    update: (data: IUpdateCategoryRequest) => any;
    delete: (data: IDeleteCategoryRequest) => any;
}

class CategoryService implements ICategoryService {
    public async all(): Promise<ICategory[]> {
        return await Category.find()
    }

    public async create(data: ICreateCategoryRequest): Promise<ICategory> {
        return await Category.create(
            {
                ...data,
                ...{
                    slug: generateSlug(data.name),
                    created_by: "user-123123"
                }
            }
        )
    }

    public async update(data: IUpdateCategoryRequest): Promise<ICategory | null> {
        const {id, ...updateData} = data;
        const filter: object = {_id: id}
        const options: object = {returnDocument: "after"}

        return await Category.findOneAndUpdate(
            filter,
            {
                ...updateData,
                ...{
                    slug: generateSlug(updateData.name),
                    updated_by: "user-123123"
                }
            }
            , options
        );
    }

    public async delete(data: IDeleteCategoryRequest): Promise<ICategory | null> {
        return await Category.findByIdAndDelete({_id: data.id})
    }
}

export default new CategoryService