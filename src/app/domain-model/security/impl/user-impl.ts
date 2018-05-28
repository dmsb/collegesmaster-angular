class UserImpl extends ModelImpl implements User {
    username: string;
    password: string;
    email: string;
    fullName: string;
    birthdate: Date;
    course: Course;
    roles: Role[];
}