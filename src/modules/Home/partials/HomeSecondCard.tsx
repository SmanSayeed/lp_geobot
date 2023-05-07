import Card from '@components/Card/Card'
import Icon from '@components/Icon/Icon'
import Text from '@components/Text/Text'
import { DownloadIcon } from '@libs/svg/DownloadIcon'
import { LinkIcon } from '@libs/svg/LinkIcon'
import { SortDescendingIcon } from '@libs/svg/SortDescendingIcon'
import React from 'react'

type Props = {}

const HomeSecondCard = (props: Props) => {
  return (
    <>
        
      {/* jointed gradiant cards  */}

        <div className="mt-5 col-center bg-yellow-300">
          <Card css="w-full p-8 py-8 bg-gradiant flex col-center lg:flex-row lg:justify-between lg:items-start gap-5">
            <Card css="second-section-card">
              <Icon
                icon={LinkIcon}
                iconColor="fill-primary_blue"
                round={true}
                css="joint-card-icon"
              />
              <Text
                text="Gerador de link WhatsApp curto"
                css="joint-card-title"
              />
              <Text
                text="Gere link de WhatsApp curto, a visualização encurtada melhora a experiência do usuário permitindo que mais pessoas cliquem no seu link."
                css="joint-card-text"
              />
            </Card>
            <Card css="second-section-card">
              <Icon
                icon={SortDescendingIcon}
                iconColor="fill-primary_blue"
                round={true}
                css="joint-card-icon"
              />
              <Text
                text="Encurtador de link whatsapp grátis"
                css="joint-card-title"
              />
              <Text
                text="Encurte seus link do WhatsApp totalmente grátis sem custos, além de gerar o link já encurtado você pode salvar na plataforma Geobot."
                css="joint-card-text"
              />
            </Card>
            <Card css="second-section-card">
              <Icon
                icon={DownloadIcon}
                iconColor="fill-primary_blue"
                round={true}
                css="joint-card-icon"
              />
              <Text
                text="Salve seus links do WhatsApp"
                css="joint-card-title"
              />
              <Text
                text="Essa é mais uma das vantagens em utilizar o nosso gerador de links para o WhatsApp, você pode salvar e ter acesso ao relatórios de cliques."
                css="joint-card-text"
              />
            </Card>
          </Card>
        </div>

      {/* jointed gradiant cards end */}
    </>
  )
}

export default HomeSecondCard