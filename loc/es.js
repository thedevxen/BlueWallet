module.exports = {
  _: {
    storage_is_encrypted: 'Su almacenamiento está cifrado. Se requiere contraseña para descifrarla.',
    enter_password: 'Inserte contraseña',
    bad_password: 'Contraseña incorrecta. Intente nuevamente.',
    never: 'nunca',
    continue: 'Continua',
    ok: 'OK',
  },
  wallets: {
    options: 'opciones',
    select_wallet: 'Selecciona billetera',
    createBitcoinWallet:
      'In order to use a Lightning wallet, a Bitcoin wallet is needed in order to fund it. Would you like to continue anyway?',
    list: {
      app_name: 'BlueWallet',
      title: 'billeteras',
      header: 'Un Monedero esta representado con secreto (clave privada) y una dirección' + 'que puedes compartir para recibir monedas.',
      add: 'Añadir Carterqa',
      create_a_wallet: 'Crear una billetera',
      create_a_wallet1: 'Es gratis y puedes crear cuantas deseas',
      create_a_wallet2: 'cuantas usted quiera',
      latest_transaction: 'última transacción',
      empty_txs1: 'Sus transacciones aparecerán aquí,',
      empty_txs2: 'ninguno por el momento.',
      empty_txs1_lightning:
        'Lightning wallet should be used for your daily transactions. Fees are unfairly cheap and speed is blazing fast.',
      empty_txs2_lightning: '\nTo start using it tap on "manage funds" and topup your balance.',
      tap_here_to_buy: 'Tap here to buy Bitcoin',
    },
    reorder: {
      title: 'Reorganizar Billetera',
    },
    add: {
      title: 'Añadir billetera',
      description:
        'Puedes escanear la billetera de papel (en WIF - Formato de importación de billeteras) o crear una nueva billetera. Las billeteras SegWit estan compatibles por defecto.',
      scan: 'Escaniar',
      create: 'Crear',
      label_new_segwit: 'Nuevo SegWit',
      label_new_lightning: 'Nuevo Lightning',
      wallet_name: 'nombre de billetera',
      wallet_type: 'tipo de billetera',
      or: 'o',
      import_wallet: 'Importar billetera',
      imported: 'Importado',
      coming_soon: 'Viene pronto',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'Detalles de la billetera',
      address: 'Dirección',
      type: 'Tipo',
      label: 'Etiqueta',
      delete: 'Eliminar',
      save: 'Guardar',
      destination: 'destino',
      description: 'descripcion',
      are_you_sure: '¿Estás seguro?',
      yes_delete: 'Si, eliminar',
      no_cancel: 'No, cancelar',
      delete_this_wallet: 'Eliminar esta carterqa',
      export_backup: 'Exportar / Guardar',
      buy_bitcoin: 'Buy Bitcoin',
      show_xpub: 'Show wallet XPUB',
    },
    export: {
      title: 'Exportacion de billetera',
    },
    xpub: {
      title: 'wallet XPUB',
      copiedToClipboard: 'Copiado a portapapeles.',
    },
    import: {
      title: 'importar',
      explanation:
        'Escriba aquí mnemotécnica, clave privada, WIF o cualquier cosa que tenga. BlueWallet hará todo lo posible para adivinar el formato correcto e importar su billetera.',
      imported: 'Importado',
      error: 'No se pudo importar. ¿Es valido?',
      success: 'Exito',
      do_import: 'Importar',
      scan_qr: 'o escanear codigo QR?',
    },
    scanQrWif: {
      go_back: 'Regresar',
      cancel: 'Cancelar',
      decoding: 'Descodificación',
      input_password: 'Ingrese su contraseña',
      password_explain: 'Eso es BIP38 clave privada encriptada',
      bad_password: 'Contraseña equivocada',
      wallet_already_exists: 'Esa billetera ya existe',
      bad_wif: 'WIF equivocado',
      imported_wif: 'WIF importado ',
      with_address: ' con dirección ',
      imported_segwit: 'SegWit importado',
      imported_legacy: 'Legado importado',
      imported_watchonly: 'Watch-only importado',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transacciónes',
      title: 'transacciónes',
      description: 'Una lista de las transacciones entrantes o salientes de sus billeteras',
      conf: 'conf',
    },
    details: {
      title: 'Transaccion',
      from: 'De',
      to: 'A',
      copy: 'Copiar',
      transaction_details: 'Detalles de la transacción',
      show_in_block_explorer: 'Mostrar en explorador de bloques',
    },
  },
  send: {
    header: 'enviar',
    confirm: {
      header: 'Confirm',
      sendNow: 'Send now',
    },
    success: {
      done: 'Done',
    },
    details: {
      title: 'Crear Transaccion',
      amount_field_is_not_valid: 'La cantidad no es válida',
      fee_field_is_not_valid: 'La tasa no es válida',
      address_field_is_not_valid: 'La dirección no es válida',
      receiver_placeholder: 'La dirección de recipiente',
      amount_placeholder: 'cantidad para enviar (in BTC)',
      fee_placeholder: 'más tasa de transaccion (in BTC)',
      note_placeholder: 'comentario (para ti mismo)',
      create_tx_error: 'Se ha producido un error al crear la transacción. Por favor, asegúrese de que la dirección es válida.',
      cancel: 'Cancelar',
      scan: 'Escaniar',
      address: 'Direccion',
      create: 'Crear',
      send: 'Envíar',
      remaining_balance: 'Balance disponible',
      total_exceeds_balance: 'El monto excede el balance disponible.',
    },
    create: {
      title: 'Crear una Transaccion',
      details: 'Detalles',
      error: 'Error al crear una transacción. ¿Dirección o cantidad estan invalidas?',
      go_back: 'Regresar',
      this_is_hex: 'Este es representacion hex de transacción, firmado y listo para ser transmitido a la red. ¿Continuar?',
      to: 'A',
      amount: 'Cantidad',
      fee: 'Tasa',
      tx_size: 'tamaño de TX',
      satoshi_per_byte: 'satoshiPorByte',
      memo: 'Comentario',
      broadcast: 'Transmitir',
      not_enough_fee: 'Tasa no es suficiente. Incremente la tasa',
    },
  },
  receive: {
    header: 'Recibir',
    details: {
      title: 'Comparte esta dirección con el pagador',
      share: 'Compartir',
      copiedToClipboard: 'Copiado a portapapeles.',
      label: 'Description',
      create: 'Create',
      setAmount: 'Receive with amount',
    },
    scan_lnurl: 'Scan to receive',
  },
  buyBitcoin: {
    header: 'Buy Bitcoin',
    tap_your_address: 'Tap your address to copy it to clipboard:',
    copied: 'Copied to Clipboard!',
  },
  settings: {
    tabBarLabel: 'Ajustes',
    header: 'Ajustes',
    plausible_deniability: 'Negación plausible...',
    storage_not_encrypted: 'Almacenamiento: no esta cifrado',
    storage_encrypted: 'Almacenamiento: cifrado',
    password: 'Contraseña',
    password_explain: 'Crea la contraseña que usarás para descifrar el almacenamiento',
    retype_password: 'Ingresa la contraseña nuevamente',
    passwords_do_not_match: 'Contraseñas deben ser iguales',
    encrypt_storage: 'Cifrar almacenamiento',
    lightning_settings: 'Lightning settings',
    lightning_settings_explain:
      'To connect to your own LND node please install LndHub' +
      ' and put its URL here in settings. Leave blank to use default ' +
      'ndHub\n (lndhub.io)',
    electrum_settings: 'Electrum Settings',
    electrum_settings_explain: 'Set to blank to use default',
    save: 'save',
    about: 'Sobre nosotros',
    language: 'Idioma',
    currency: 'Moneda',
    advanced_options: 'Advanced Options',
    enable_advanced_mode: 'Enable advanced mode',
  },
  plausibledeniability: {
    title: 'Negación plausible',
    help:
      'Bajo ciertas circunstancias, usted podría verse obligado a revelar un ' +
      'contraseña. Para mantener sus monedas seguras, BlueWallet puede crear otro ' +
      'almacenamiento cifrado, con una contraseña diferente. Bajo la presión' +
      'puede revelar esta contraseña a un tercero. Si se ingresa en ' +
      'BlueWallet, desbloqueará un nuevo almacenamiento `falso`. Esto parecerá ' +
      'legítimo para un tercero, pero en secreto mantendrá su almacenamiento principal ' +
      'con monedas seguras.',
    help2: 'El nuevo almacen sera completamente funcional, y puedes almacenar ' + 'cantidades minimas para que sea mas creible.',
    create_fake_storage: 'Crear un almacen cifrado falso',
    go_back: 'Regresar',
    create_password: 'Crear una contraseña',
    create_password_explanation: 'La contraseña para el almacen falso no puede ser el mismo para su almacen principal.',
    password_should_not_match: 'La contraseña para el almacen falso no puede ser el mismo para su almacen principal.',
    retype_password: 'Volver a escribir contraseña',
    passwords_do_not_match: 'Las contraseñas no coinciden, intente nuevamente',
    success: 'Exitoso',
  },
  lnd: {
    title: 'manejar fondos',
    choose_source_wallet: 'Elija una billetera de fuente',
    refill_lnd_balance: 'Rellenar el balance de la billetera Lightning',
    refill: 'Rellenar',
    withdraw: 'Retirar',
    placeholder: 'Invoice',
    expired: 'Expirado',
    sameWalletAsInvoiceError: 'You can not pay an invoice with the same wallet used to create it.',
  },
  pleasebackup: {
    title: 'Your wallet is created...',
    text:
      "Please take a moment to write down this mnemonic phrase on a piece of paper. It's your backup you can use to restore the wallet on other device.",
    ok: 'OK, I wrote this down!',
  },
  lndViewInvoice: {
    wasnt_paid_and_expired: 'This invoice was not paid for and has expired',
    has_been_paid: 'This invoice has been paid for',
    please_pay: 'Please pay',
    sats: 'sats',
    for: 'For:',
    additional_info: 'Additional Information',
    open_direct_channel: 'Open direct channel with this node:',
  },
};
