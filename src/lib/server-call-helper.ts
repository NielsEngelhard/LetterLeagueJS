export async function serverCall(method: () => Promise<void> | void, form: any) {
    try {
        await method();
    } catch (error) {
        console.log(`Error: ${error}`);
        
        form.setError("root", {
            type: "server",
            message: "Something went wrong while creating your game."
        });
    }
}