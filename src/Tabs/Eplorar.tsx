import { VStack, Text,ScrollView } from "native-base";
import { Titulo } from "../componentes/Titulo";
import { Box } from "native-base";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import { CardConsulta } from "../componentes/CardConsulta";



export default function Explorar(){
    return(
        <ScrollView flex={1}  >
        <VStack p="2" >
            <VStack marginLeft={5} borderRadius={5} bg='white'w="90%" flex={1} alignItems="center" p={5}>
            <Box >
                <EntradaTexto placeholder='Digite a especialidade' ></EntradaTexto>
                <EntradaTexto placeholder='Digite sua localização' ></EntradaTexto>
            </Box>
            <Botao>
               Buscar
            </Botao>
            </VStack>
           
           
         
            <Titulo color="blue.500"  alignSelf="center"  >Resultado da busca</Titulo>
           {[1,2,3, 4,5,6].map((_, index)=>(
            <VStack  w="100%" borderRadius="lg" textAlign="center" flex={1} alignItems="center" p={5} key={index} >
            
            <CardConsulta
            nome="Dr.Luiz fernando"
            especialidade="Urologista"
            foto="https://github.com/robertomoraesjunior.png"
            data="20/06/2024"
           
            />
            </VStack>
        ))}
        </VStack>
        
        </ScrollView>
        
    )
}
