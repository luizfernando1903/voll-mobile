import { VStack, Text, Box, ScrollView, Divider,Image} from "native-base";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import Logo from '../assets/Logo.png';
import { Titulo } from "../componentes/Titulo";



export default function Principal() {
    return (
        <ScrollView flex={1}>
             <Image source={Logo} ></Image>
            <Titulo color="blue.500"  >Boas-vindas!</Titulo>
           
            <VStack w="100%" borderRadius="lg" textAlign="center" flex={1} alignItems="center" p={5} >
    
                <Box >
                    <EntradaTexto placeholder='Digite a especialidade' ></EntradaTexto>
                    <EntradaTexto placeholder='Digite sua localização' ></EntradaTexto>
                </Box>
                <Botao>
                    Buscar
                </Botao>
                <VStack>
                    <Titulo color="blue.900" alignSelf="center">Depoimentos</Titulo>

                    <Text marginBottom={5} color="gray.500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis quam eu nulla auctor vehicula. Praesent quis sollicitudin dolor. Mauris tempor posuere ultricies. Suspendisse metus ipsum, auctor dictum mi a, imperdiet tempus quam. In semper arcu nibh, sit amet ultrices velit interdum et. Maecenas congue fermentum est ac sagittis. Phasellus dapibus purus sapien, in dignissim tellus lobortis eu. Fusce sit amet velit auctor, malesuada leo at, condimentum neque. Integer a sem vel quam semper convallis. Duis placerat consectetur blandit. Aliquam hendrerit erat sapien, eu suscipit ante scelerisque nec. Morbi eu commodo nisi. In elit augue, tempus in bibendum ut, dictum id tortor. Mauris at condimentum erat, id egestas augue.
                    </Text>
                    <Titulo color="gray.800" alignSelf="center">Julio,40 Anos,Sao Paulo/SP</Titulo>
                    <Divider mt={5} />

                    <Text marginBottom={5} color="gray.500">
                        Aliquam erat volutpat. Ut sollicitudin erat eget elit feugiat, sed malesuada risus ullamcorper. Sed eget nisl erat. Aliquam vitae lacus venenatis, sodales eros eu, congue eros. Sed libero eros, bibendum sed lacinia eu, laoreet sed purus. Nunc in tempus tellus. Fusce non commodo ante. Mauris massa lorem, laoreet id sem a, blandit tempus odio. Fusce maximus rhoncus metus non consequat. Nam sem ex, tempor vel accumsan sit amet, venenatis a elit. Donec non condimentum sem. Vivamus faucibus erat at luctus consectetur. Nunc maximus magna ut pellentesque congue. Fusce non laoreet augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut malesuada tempor faucibus.
                    </Text>
                    <Titulo color="gray.800" alignSelf="center">João,52 Anos,Votuporanga/SP</Titulo>
                    <Divider mt={5} />

                    <Text marginBottom={5} color="gray.500">
                        Donec eu hendrerit tellus, nec efficitur urna. Fusce interdum velit erat, sed gravida lorem aliquam id. Curabitur viverra tempor dui in semper. Nunc maximus molestie congue. Donec ultricies dolor ac luctus commodo. Suspendisse magna lectus, hendrerit quis pretium eu, tincidunt non massa. Cras rutrum condimentum lacus, vel posuere ex convallis sed. Etiam vitae sem eget est commodo gravida.
                    </Text>
                    <Titulo color="gray.800" alignSelf="center">Carlão,47 Anos,Rio Preto/SP</Titulo>
                    <Divider mt={5} />

                    <Text marginBottom={5} color="gray.500">
                        Donec tempor laoreet lacus id faucibus. Nulla varius, massa eu accumsan efficitur, tellus nisi rhoncus ante, non ultrices urna leo eget urna. Donec convallis sem eu vulputate malesuada. Curabitur tempor, diam ut sodales finibus, odio lectus dignissim dui, et sagittis nulla mi id orci. Mauris posuere dui et dictum tincidunt. Phasellus bibendum ante ullamcorper elementum mattis. Praesent massa sapien, porttitor ornare condimentum at, efficitur ut quam. Phasellus ut blandit nisi. Fusce ac libero ante. In sagittis nisl at arcu congue volutpat.
                    </Text>
                    <Titulo color="gray.800" alignSelf="center">Kaue,33 Anos,Votuporanga/SP</Titulo>
                </VStack>
            </VStack>
        </ScrollView>
    )
}