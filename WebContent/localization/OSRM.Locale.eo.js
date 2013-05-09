/*
This program is free software; you can redistribute it and/or modify
it under the terms of the GNU AFFERO General Public License as published by
the Free Software Foundation; either version 3 of the License, or
any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
or see http://www.gnu.org/licenses/agpl.txt.
*/

// OSRM localization
// [French language support]


OSRM.Localization["eo"] = {
// own language
"CULTURE": "eo",
"LANGUAGE": "Esperanto",
//gui
"GUI_START": "Komenco",
"GUI_END": "Fino",
"GUI_RESET": "Reŝargo",
"GUI_ZOOM_ON_ROUTE": "Zomi sur la vojo",
"GUI_ZOOM_ON_USER": "Zomi sur la uzanto",
"GUI_SEARCH": "Montri",
"GUI_REVERSE": "Inversi",
"GUI_START_TOOLTIP": "Enigu komencloko",
"GUI_END_TOOLTIP": "Enigu finloko",
"GUI_MAIN_WINDOW": "Ĉefa fenestro",
"GUI_ZOOM_IN": "Zomi",
"GUI_ZOOM_OUT": "Malzomi",
// config
"GUI_CONFIGURATION": "Agordo",
"GUI_LANGUAGE": "Lingvo",
"GUI_UNITS": "Unuoj",
"GUI_KILOMETERS": "Kilometroj",
"GUI_MILES": "Mejloj",
// mapping
"GUI_MAPPING_TOOLS": "Mapaj iloj",
"GUI_HIGHLIGHT_UNNAMED_ROADS": "Marki la statojn sen nomo",
"GUI_SHOW_PREVIOUS_ROUTES": "Vidigi antaŭajn itinerojn",
"OPEN_JOSM": "JOSM",
"OPEN_OSMBUGS": "OSM cimoj",
// geocoder
"SEARCH_RESULTS": "Serĉ-rezultoj",
"FOUND_X_RESULTS": "%i rezulto(j)",
"TIMED_OUT": "La serĉado eltempiĝis",
"NO_RESULTS_FOUND": "Neniu rezultoj tovitaj",
"NO_RESULTS_FOUND_SOURCE": "Neniu rezultoj por la komenco",
"NO_RESULTS_FOUND_TARGET": "Neniu rezultoj por la fino",
// routing
"ROUTE_DESCRIPTION": "Itinera priskribo",
"GET_LINK_TO_ROUTE": "Generi ligilon",
"GENERATE_LINK_TO_ROUTE": "atendante la ligilon",
"LINK_TO_ROUTE_TIMEOUT": "nehavebla",
"GPX_FILE": "GPX dosiero",
"DISTANCE": "Distanco",
"DURATION": "Daŭro",
"YOUR_ROUTE_IS_BEING_COMPUTED": "Via itinero estas kalkulanta",
"NO_ROUTE_FOUND": "Neniu eblaj itineroj",
// printing
"OVERVIEW_MAP": "Mapo",
"NO_ROUTE_SELECTED": "Neniu elektitaj itineroj",
// routing engines
"ENGINE_0": "aŭto (la plej rapide)",
// directions
"N": "nordo",
"S": "sudo",
"E": "oriento",
"W": "okcidento",
"NE": "nord-oriento",
"SE": "sud-oriento",
"SW": "sud-okcidento",
"NW": "nord-okcidento",
// driving directions
// %s: road name
// [*]: will only be printed when there actually is a road name
"DIRECTION_0":"Nekonata instrukcio[ en <b>%s</b>]",
"DIRECTION_1":"Daŭrigu[ en <b>%s</b>]",
"DIRECTION_2":"Turnu malforte dekstren[ en <b>%s</b>]",
"DIRECTION_3":"Turnu dekstren[ en <b>%s</b>]",
"DIRECTION_4":"Turnu forte dekstren[ en <b>%s</b>]",
"DIRECTION_5":"Faru duon-turno[ en <b>%s</b>]",
"DIRECTION_6":"Turnu forte maldekstren[ en <b>%s</b>]",
"DIRECTION_7":"Turnu maldekstren[ en <b>%s</b>]",
"DIRECTION_8":"Turnu malforte maldekstren[ en <b>%s</b>]",
"DIRECTION_10":"Direkcio <b>%d</b>[ en <b>%s</b>]",
"DIRECTION_11-1":"Al la trafikrondo, prenu la unua elirejo[ en <b>%s</b>]",
"DIRECTION_11-2":"Al la trafikrondo, prenu la dua elirejo[ en <b>%s</b>]",
"DIRECTION_11-3":"Al la trafikrondo, prenu la tria elirejo[ en <b>%s</b>]",
"DIRECTION_11-4":"Al la trafikrondo, prenu la kvara elirejo[ en <b>%s</b>]",
"DIRECTION_11-5":"Al la trafikrondo, prenu la kvina elirejo[ en <b>%s</b>]",
"DIRECTION_11-6":"Al la trafikrondo, prenu la sesa elirejo[ en <b>%s</b>]",
"DIRECTION_11-7":"Al la trafikrondo, prenu la sepa elirejo[ en <b>%s</b>]",
"DIRECTION_11-8":"Al la trafikrondo, prenu la oka elirejo[ en <b>%s</b>]",
"DIRECTION_11-9":"Al la trafikrondo, prenu la naŭa elirejo[ en <b>%s</b>]",
"DIRECTION_11-x":"Al la trafikrondo, prenu unu el la tro multnombraj elirejoj[ en <b>%s</b>]",
"DIRECTION_15":"Vi estas alveninta"
};

// set GUI language on load
if( OSRM.DEFAULTS.LANUGAGE_ONDEMAND_RELOADING == true )
	OSRM.Localization.setLanguage("fr", true);
