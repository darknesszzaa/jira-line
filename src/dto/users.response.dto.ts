import { ApiProperty } from '@nestjs/swagger';

export class UsersResponseDto {
    @ApiProperty({ example: 'Anucha'})
    public firstName : string;

    @ApiProperty({ example: 'Prapphrom'})
    public lastName : string;

    @ApiProperty({ example: 'anucha'})
    public username : string;

    @ApiProperty({ example: 'ZPg3I4tOivnNPcL9UUdd'})
    public id : string;

}
