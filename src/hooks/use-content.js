import { graphql, useStaticQuery } from 'gatsby'

const useContent = (lang) => {
    
    const data = useStaticQuery(graphql`
      query {
        allDatoCmsHome {
          nodes {
            picHeader {
              fluid(maxWidth: 1200) {
                ...GatsbyDatoCmsFluid
              }
            }
            titleContactoEs
            titleContactoEn
            telefono
            horarioEs
            horarioEn
            picAbout {
              fluid(maxWidth: 1200) {
                ...GatsbyDatoCmsFluid
              }
            }
            titleAboutEs
            titleAboutEn
            aboutEs
            aboutEn
            picComer {
              fluid(maxWidth: 400) {
                ...GatsbyDatoCmsFluid
              }
            }
            subtComerEs
            subtComerEn
            comerEs
            comerEn
            comerCartaEs {
              url
            }
            comerCartaEn {
              url
            }
            linktextComerEs
            linktextComerEn
            picBeber {
              fluid(maxWidth: 400) {
                ...GatsbyDatoCmsFluid
              }
            }
            subtBeberEs
            subtBeberEn
            beberEn
            beberEs
            beberCartaEs {
              url
            }
            beberCartaEn {
              url
            }
            linktextBeberEs
            linktextBeberEn
            picCelebrar {
              fluid(maxWidth: 400) {
                ...GatsbyDatoCmsFluid
              }
            }
            subtCelebrarEs
            subtCelebrarEn
            celebrarEs
            celebrarEn
            linktextCelebrarEs
            linktextCelebrarEn
            titleGaleriaEs
            titleGaleriaEn
            galeria {
              fixed(width: 600) {
                ...GatsbyDatoCmsFixed
              }
            }
          }
        }
      }
    `)
        
    const allContent = data.allDatoCmsHome.nodes[0]
    let content = {
      picHeader: allContent.picHeader,
      picAbout: allContent.picAbout,
      picComer: allContent.picComer,
      picBeber: allContent.picBeber,
      picCelebrar: allContent.picCelebrar,
      galeria: allContent.galeria,
    }

    lang === "ES"
      ? (content = {
          ...content,
          titleContacto: allContent.titleContactoEs,
          telefono: allContent.telefono,
          horario: allContent.horarioEs,
          titleAbout: allContent.titleAboutEs,
          about: allContent.aboutEs,
          subtComer: allContent.subtComerEs,
          comer: allContent.comerEs,
          linktextComer: allContent.linktextComerEs,
          comerCarta: allContent.comerCartaEs,
          subtBeber: allContent.subtBeberEs,
          beber: allContent.beberEs,
          linktextBeber: allContent.linktextBeberEs,
          beberCarta: allContent.beberCartaEs,
          subtCelebrar: allContent.subtCelebrarEs,
          celebrar: allContent.celebrarEs,
          linktextCelebrar: allContent.linktextCelebrarEs,
          titleGaleria: allContent.titleGaleriaEs,
        })
      : (content = {
          ...content,
          titleContacto: allContent.titleContactoEn,
          telefono: allContent.telefono,
          horario: allContent.horarioEn,
          titleAbout: allContent.titleAboutEn,
          about: allContent.aboutEn,
          subtComer: allContent.subtComerEn,
          comer: allContent.comerEn,
          linktextComer: allContent.linktextComerEn,
          comerCarta: allContent.comerCartaEn,
          subtBeber: allContent.subtBeberEn,
          beber: allContent.beberEn,
          linktextBeber: allContent.linktextBeberEn,
          beberCarta: allContent.beberCartaEn,
          subtCelebrar: allContent.subtCelebrarEn,
          celebrar: allContent.celebrarEn,
          linktextCelebrar: allContent.linktextCelebrarEn,
          titleGaleria: allContent.titleGaleriaEn,
        })
        
        return content
       
}

export default useContent