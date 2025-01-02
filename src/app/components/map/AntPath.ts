/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createElementHook,
  createPathHook,
  createContainerComponent,
} from "@react-leaflet/core";
import { antPath } from "leaflet-ant-path";

function createAntPath(props: any, context: any) {
  const instance = antPath(props.positions, props.options);
  return { instance, context: { ...context, overlayContainer: instance } };
}

function updateAntPath(instance: any, props: any, prevProps: any) {
  if (
    props.positions !== prevProps.positions ||
    props.options !== prevProps.options
  ) {
    instance.setLatLngs(props.positions);
  }
}

const useAntPathElement = createElementHook(createAntPath, updateAntPath);
const useAntPath = createPathHook(useAntPathElement);
const AntPath = createContainerComponent(useAntPath);

export default AntPath;
