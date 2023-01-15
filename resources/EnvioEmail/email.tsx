import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Button } from "@react-email/button";

type Props = {
    url: string
}
const Email: React.FC<Readonly<Props>> = ({url}) => {
    return (
        <Html lang="pt-BR">
            <Text>Email de teste</Text>
        </Html>
    )
}

export default Email;