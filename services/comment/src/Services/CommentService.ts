import Comment, {IComment} from "../Models/Comment";
import {ICreateCommentRequest} from "../Requests/CreateCommentRequest";
import {IUpdateCommentRequest} from "../Requests/UpdateCommentRequest";
import {IDeleteCommentRequest} from "../Requests/DeleteCommentRequest";

export interface ICommentService {
    all: () => any;
    create: (data: ICreateCommentRequest) => any;
    update: (data: IUpdateCommentRequest) => any;
    delete: (data: IDeleteCommentRequest) => any;
}

class CommentService implements ICommentService {
    public async all(): Promise<IComment[]> {
        return await Comment.find()
    }

    public async create(data: ICreateCommentRequest): Promise<IComment> {
        return await Comment.create(
            {
                ...data,
                ...{
                    created_by: "user-123123"
                }
            }
        )
    }

    public async update(data: IUpdateCommentRequest): Promise<IComment | null> {
        const {id, ...updateData} = data;
        const filter: object = {_id: id}
        const options: object = {returnDocument: "after"}

        return await Comment.findOneAndUpdate(
            filter,
            {
                ...updateData,
                ...{
                    updated_by: "user-123123"
                }
            }
            , options
        );
    }

    public async delete(data: IDeleteCommentRequest): Promise<IComment | null> {
        return await Comment.findByIdAndDelete({_id: data.id})
    }
}

export default new CommentService