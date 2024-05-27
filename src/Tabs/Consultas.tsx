import { VStack, Text,Avatar  } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";

export default function Consultas(){
    return(
        <VStack p={5}>

            <Text>Consultas</Text>
            <CardConsulta
            nome="Dr.Luiz fernando"
            especialidade="Urologista"
            foto="https://github.com/robertomoraesjunior.png"
            data="20/06/2024"
            foiAgendado
            foiAtendido
            />
        </VStack>
    )
}