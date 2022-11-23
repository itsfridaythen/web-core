import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import type { ReactElement } from 'react'

import MsgDetails from '@/components/signedMessages/MsgDetails'
import MsgSummary from '@/components/signedMessages/MsgSummary'
import type { SignedMessage } from '@/store/signedMessagesSlice'

import txListItemCss from '@/components/transactions/TxListItem/styles.module.css'

const ExpandableMsgItem = ({ msg }: { msg: SignedMessage }): ReactElement => {
  return (
    <Accordion disableGutters elevation={0} className={txListItemCss.accordion}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ justifyContent: 'flex-start', overflowX: 'auto' }}>
        <MsgSummary msg={msg} />
      </AccordionSummary>

      <AccordionDetails sx={{ padding: 0 }}>
        <MsgDetails msg={msg} />
      </AccordionDetails>
    </Accordion>
  )
}

export default ExpandableMsgItem