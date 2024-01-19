const initialState = {
  song: [],
  Jazz: ["milesdavis", "johncoltrane", "charlieparker", "ninasimone", "theloniousmonk", "herbiehancock", "billieholiday", "dukeellington", "stangetz", "ellafitzgerald", "chickcorea", "davidsanjborn", "patmetheny", "norahjones", "cannonballadderley"],
  Electronic: ["daftpunk", "deadmau5", "tiesto", "avicii", "justice", "calvinharris", "martingarrix", "zedd", "arminvanbuuren", "thieverycorporation", "thomasgold", "bassnectar", "kaskade", "alesso", "flume"],
  Country: ["johnnycash", "willienelson", "dollyparton", "garthbrooks", "shaniatwain", "bradpaisley", "taylorswift", "georgejones", "kennychesney", "alanjackson", "timmcgraw", "carrieunderwood", "blakeshelton", "faithhill", "keithurban"],
  Rock: ["ledzeppelin", "pinkfloyd", "thebeatles", "rollingstones", "queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi", "nirvana", "gunsnroses", "acdc", "radiohead"],
  Pop: ["michaeljackson", "madonna", "prince", "beyonce", "justintimberlake", "rihanna", "brunomars", "adele", "eltonjohn", "whitneyhouston", "katyperry", "arianagrande", "edsheeran", "taylorswift", "shawnmendes"],
  HipHop: ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest", "jayz", "nas", "kendricklamar", "nickiminaj", "travisscott", "cardib", "postmalone", "future", "chancetherapper", "migos"],
  Classical: ["mozart", "beethoven", "bach", "chopin", "vivaldi", "tchaikovsky", "brahms", "haydn", "debussy", "rachmaninoff", "liszt", "strauss", "handel", "paganini", "shostakovich"],
  Reggae: ["bobmarley", "peterframpton", "jimmycliff", "tootsandthemaytals", "damianmarley", "steelPulse", "barringtonlevy", "gregoryisaacs", "burningSpear", "maxromeo", "dennisbrown", "ub40", "sizzlakalonji", "chronixx", "protoje"],
  Blues: ["bbking", "muddywaters", "howlinwolf", "johnleehooker", "buddyguy", "albertking", "etajames", "sonnyboywilliamson", "robertjohnson", "tajmahal", "johnnywinter", "kokoTaylor", "williedixon", "steveRayVaughan", "bonnieRaitt"],
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_IN_MAIN":
      return {
        ...state,
        song: [...state.song, action.payload],
      };

    default:
      return state;
  }
};

export default MainReducer;