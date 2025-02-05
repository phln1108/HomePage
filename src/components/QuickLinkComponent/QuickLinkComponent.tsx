import { MouseEvent, useContext, useMemo, useRef, useState } from "react";
import { OptionsIcon, CrossIcon, BrowserIcon } from "../../assets/Icons";
import { QuickLink } from "../../Utils/DataStructure"
import { OptionsModal, QuickLinkStyle } from "./QuickLinkComponent.style";
import { ModalContext } from "../../context/ModalContext";
import { Loader } from "../Loader/Loader";

interface QuickLinkProps {
  quickLink: QuickLink;
  onRemove: () => void;
}

export const QuickLinkComponent = ({ quickLink, onRemove }: QuickLinkProps) => {
  const {
    openQuickLinkModal
  } = useContext(ModalContext)
  
  const optionsRef = useRef<HTMLButtonElement | null>(null)
  
  const [tryed, setTryed] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const faviconUrls = useMemo<string[]>(
    () => {
      try {
        const domain = new URL(quickLink.link).hostname;
        
        if(domain === "localhost" || !domain.match(/[a-z]/i))
          return []

        return [
          `https://logo.clearbit.com/${domain}`,
          `https://besticon-demo.herokuapp.com/icon?url=${domain}&size=80..120..200`,
          `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
          `https://icons.duckduckgo.com/ip3/${domain}.ico`,
          `https://${domain}/favicon.ico`,
        ];
      } catch (error) {
        return []
      }
    },
    [quickLink]
  )

  const favicon = faviconUrls[tryed] || null

  const mouseDownHandler = (event: MouseEvent) => {
    switch (event.button) {
      case 0:
        location.href = quickLink.link;
        break;

      case 1:
        window.open(quickLink.link);
        break;

      case 2:
        event.preventDefault()
        optionsRef.current?.focus()
        break;
    }
  }

  return (
    <QuickLinkStyle
      $transparent={favicon !== null}
      onMouseDown={mouseDownHandler}
      onContextMenu={ e => e.preventDefault()}
    >

      {isLoading && favicon ?
        <>
          <img
            style={{ display: "none" }}
            src={favicon}
            onError={() => setTryed(tryed + 1)}
            onLoad={() => setIsLoading(false)}
          />
          <Loader/>
        </>
        :

        favicon ?
          <img
            src={favicon}
          />
  
          :
  
          <BrowserIcon />
      }
      
      <label>{quickLink.name}</label>
      <button
        ref={optionsRef}
        onMouseDown={(e) => e.stopPropagation()}
        onClick={(e) => { e.stopPropagation();  }}
      >
        <OptionsIcon />
      </button>
      <OptionsModal>
        <button
        onMouseDown={(e) => e.stopPropagation()}
        onClick={(e) => { e.stopPropagation(); openQuickLinkModal(quickLink)}}
        >Edtar</button>
        <button 
        className="alert" 
        onMouseDown={(e) => e.stopPropagation()}
        onClick={(e) => { e.stopPropagation(); onRemove() }}
        >Remover</button>
      </OptionsModal>
    </QuickLinkStyle>
  )
}

export const QuickLinkEmpty = () => {
  const {
    openQuickLinkModal
  } = useContext(ModalContext)

  return (
    <QuickLinkStyle onClick={() => openQuickLinkModal()}>
      <CrossIcon />
      <label></label>
    </QuickLinkStyle>
  )
}