import { Bucket, Table} from "@serverless-stack/resources"
// import { Table } from "aws-cdk-lib/aws-dynamodb";


const bucket = new Bucket(stack, "Uploads");



export function StorageStack({stack, app}){
    const table = new Table(stack, "Notes", {
        feilds: {
            userId: "string",
            noteId: "string",
        },
        primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
    });

    return {
        table,
        bucket,
    };
}