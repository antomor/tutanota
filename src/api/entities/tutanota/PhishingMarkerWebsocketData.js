// @flow

import {create, TypeRef} from "../../common/EntityFunctions"

export const PhishingMarkerWebsocketDataTypeRef: TypeRef<PhishingMarkerWebsocketData> = new TypeRef("tutanota", "PhishingMarkerWebsocketData")
export const _TypeModel: TypeModel = {
	"name": "PhishingMarkerWebsocketData",
	"since": 40,
	"type": "DATA_TRANSFER_TYPE",
	"id": 1031,
	"rootId": "CHR1dGFub3RhAAQH",
	"versioned": false,
	"encrypted": false,
	"values": {
		"_format": {
			"name": "_format",
			"id": 1032,
			"since": 40,
			"type": "Number",
			"cardinality": "One",
			"final": false,
			"encrypted": false
		}
	},
	"associations": {
		"markers": {
			"name": "markers",
			"id": 1033,
			"since": 40,
			"type": "AGGREGATION",
			"cardinality": "Any",
			"refType": "PhishingMarker",
			"final": false
		}
	},
	"app": "tutanota",
	"version": "40"
}

export function createPhishingMarkerWebsocketData(values?: $Shape<$Exact<PhishingMarkerWebsocketData>>): PhishingMarkerWebsocketData {
	return Object.assign(create(_TypeModel, PhishingMarkerWebsocketDataTypeRef), values)
}
